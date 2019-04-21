<template>
  <form
    v-if="modal !== undefined && modal.show"
    ref="paymentMethodForm"
    novalidate
    @submit.prevent
  >
    <mdb-modal
      @close="beforeClose"
    >
      <mdb-modal-header>
        <mdb-modal-title>{{ modal.title }}</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <p class="text-center py-2">
          {{ modal.description }}
        </p>

        <mdb-select v-model="paymentMethods" name="payment-method" color="success" required @getValue="selectPaymentMethod" />
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="danger" icon="times" @click="beforeClose">
          Sluiten
        </mdb-btn>
        <mdb-btn color="success" icon="coins" iconRight @click="pay">
          Betalen
        </mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <ConfirmModal
      :show="cancelConfirm.show"
      :danger="true"
      @confirmed="cancelConfirm.confirmed = true"
      @aborted="cancelConfirm.aborted = true"
    />
  </form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import ConfirmModal from '@/components/modals/Confirm/index'
import {
  mdbModal,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbModalHeader,
  mdbBtn,
  mdbSelect
} from 'mdbvue'
export default {
  name: 'GuestModal',
  components: {
    mdbModal,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbModalHeader,
    mdbBtn,
    mdbSelect,
    ConfirmModal
  },
  props: {
    paymentInfo: {
      type: Object,
      required: false,
      default() {
        return {
          formId: null,
          paymentId: null,
          postId: null,
          methods: []
        }
      },

      formId: {
        required: true,
        type: Number
      },

      methods: {
        required: true,
        type: Array
      },

      paymentId: {
        required: true,
        type: String
      },

      postId: {
        required: true,
        type: Number
      }
    }
  },
  data() {
    return {
      cancelConfirm: {
        show: false,
        confirmed: null,
        aborted: null
      },
      selectedPaymentMethod: null,
      paymentMethods: [
        {
          text: 'Kies betaalmethode',
          value: null,
          disabled: true,
          selected: true
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      getBaseUrl: 'core/GET_API_BASE_URL',
      getPaymentModal: 'modals/GET_MODAL_BY_NAME_AND_TYPE',
      get_form_by_id: 'forms/GET_FORM_BY_ID'
    }),

    options() {
      return this.paymentInfo.methods
    },

    form() {
      return this.get_form_by_id(this.paymentInfo.formId)
    },

    modal() {
      return this.getPaymentModal('payment-methods-modal', 'payment')
    }
  },
  watch: {
    modal: {
      handler: function(modalChange) {
        if (modalChange.show) {
          this.scrollToTop(200)
        }
      },
      deep: true
    },
    cancelConfirm: {
      handler: function(modalChange) {
        if (modalChange.confirmed) {
          modalChange.confirmed = null
          modalChange.show = false

          this.set_payment_status({
            formId: this.paymentInfo.formId,
            status: 'aborted'
          })

          this.close()
        }

        if (modalChange.aborted) {
          modalChange.aborted = null
          modalChange.show = false
        }
      },
      deep: true
    }
  },
  mounted() {
    this.formatPaymentMethods()
  },
  methods: {
    ...mapMutations({
      hide: 'modals/SET_HIDE_MODAL'
    }),

    ...mapActions({
      set_payment_status: 'forms/do_set_payment_status'
    }),

    selectPaymentMethod(value) {
      this.selectedPaymentMethod = value
    },

    formatPaymentMethods() {
      if (this.paymentInfo.methods !== undefined) {
        Object.keys(this.paymentInfo.methods).map(methodKey => {
          const method = this.paymentInfo.methods[methodKey]

          this.paymentMethods.push({
            text: method.name,
            value: method.id,
            icon: method.image.svg,
            disabled: false,
            selected: false
          })
        })
      }
    },

    async pay() {
      const url = `${this.getBaseUrl}/order/make/payment/${
        this.paymentInfo.paymentId
      }`
      const { status, data } = await this.$axios.post(url, {
        postId: this.paymentInfo.postId,
        paymentId: this.paymentInfo.paymentId,
        paymentMethod: this.selectedPaymentMethod
      })

      if (status === 200) {
        window.location.href = data
      }
    },

    close() {
      this.selectedPaymentMethod = null
      this.$emit('aborted')
      this.hide(this.modal.id)
    },

    beforeClose() {
      this.cancelConfirm.show = true
    },

    scrollToTop(scrollDuration) {
      const modals = document.getElementsByClassName('modal')
      for (const indexModal in modals) {
        const scrollStep = -modals[indexModal].scrollTop / (scrollDuration / 15)
        if (modals[indexModal] instanceof HTMLDivElement) {
          const scrollInterval = setInterval(() => {
            if (modals[indexModal].scrollTop !== 0) {
              modals[indexModal].scrollBy(0, scrollStep)
            } else clearInterval(scrollInterval)
          }, 15)
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
