<template>
  <main :id="`order-complete-${uuid}`">
    <NavBar id="navbar" class-prop="bg-nonomes-blue position-relative" />
    <mdb-container fluid>
      <Invoice v-if="status.paid" :order="order" />
    </mdb-container>

    <ConfirmModal
      :title="modalTitle"
      :show="status.failed || status.aborted"
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
        @aborted="status.failed = true"
        @failed="status.failed = true"
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
    alert(1)
    if (this.status.failed || this.status.aborted) {
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

      this.status.failed = false
      this.paymentRetryModal.show = true
    },
    errorAbort() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
p {
  line-height: 1rem;
}
.invoice-logo {
  height: 150px !important;
}
</style>
