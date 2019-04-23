<template>
  <main :id="`order-complete-${uuid}`">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <Invoice v-if="status.paid" :order="order" />
    </mdb-container>

    <ConfirmModal
      :title="modalTitle"
      :description="modalDescription"
      :show="!status.paid"
      :success="paymentRetryModal.success"
      :warning="paymentRetryModal.warning"
      :danger="paymentRetryModal.danger"
      confirmText="Betalen"
      abortText="Annuleren"
      @confirmed="errorConfirm"
      @aborted="errorAbort"
    >
      <PaymentRetry
        v-if="paymentRetryModal.show"
        :order-uuid="uuid"
        :paymentMethods="paymentRetryModal.paymentMethods"
        @aborted="paymentAborted"
        @failed="paymentAborted"
      />
    </ConfirmModal>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import NavBar from '@/components/NavBar'
import Invoice from '@/components/Invoice'
import ConfirmModal from '@/components/modals/Confirm/index'
import PaymentRetry from '@/components/modals/Payment/Retry'
import { mdbContainer } from 'mdbvue'
import moment from 'moment'
export default {
  name: 'Uuid',
  head() {
    return {
      title: `${this.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.description}`
        }
      ]
    }
  },
  components: {
    Invoice,
    NavBar,
    mdbContainer,
    ConfirmModal,
    PaymentRetry
  },
  data() {
    return {
      paymentRetryModal: {
        show: false,
        success: false,
        warning: false,
        danger: false,
        paymentMethods: [
          {
            text: 'Kies betaalmethode',
            value: null,
            disabled: true,
            selected: true
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      get_form_by_id: 'forms/GET_FORM_BY_ID',
      getModal: 'modals/GET_MODAL_BY_NAME_AND_TYPE'
    }),

    timePassed() {
      return (
        moment().diff(
          moment(this.api_createdAt, 'DD-MM-YYYY HH:mm:ss'),
          'minutes'
        ) > 15
      )
    },
    modalTitle() {
      if (this.timePassed) {
        return 'Hey, welkom terug!'
      } else {
        return this.payment_response_messages.error
      }
    },

    modalDescription() {
      if (this.timePassed) {
        return 'Rond je betaling af 💸'
      } else {
        return 'Er is iets misgegaan, wil je het nog een keer proberen?'
      }
    },

    order() {
      return this.$data
    }
  },
  async asyncData({ params, error, $axios }) {
    const { data, status } = await $axios.get(`/order/get/${params.uuid}`)
    if (status === 203) {
      error({ statusCode: 404, message: 'Niet gevonden... 🤔' })
    }

    return data
  },
  mounted() {
    if (!this.status.paid) {
      if (this.timePassed) {
        this.paymentRetryModal.warning = true
      } else {
        this.paymentRetryModal.danger = true
      }
    }
  },
  methods: {
    ...mapMutations({
      showModal: 'modals/SET_SHOW_MODAL'
    }),

    async errorConfirm() {
      const { data } = await this.$axios.get(`/order/retry/${this.uuid}`)

      data.methods.map(method =>
        this.paymentRetryModal.paymentMethods.push(method)
      )

      this.setWaitingForPaymentActive()
      this.paymentRetryModal.show = true
    },

    errorAbort() {
      this.$router.push('/')
    },

    setWaitingForPaymentActive() {
      this.status.failed = false
      this.status.aborted = false
      this.status.expired = false
      this.status.waitingForPayment = true
    },

    paymentAborted() {
      this.status.failed = false
      this.status.aborted = true
      this.status.expired = false
      this.status.waitingForPayment = false
      this.paymentRetryModal.show = false
    }
  }
}
</script>

<style>
</style>
