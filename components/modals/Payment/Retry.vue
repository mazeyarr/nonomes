<template>
  <form
    novalidate
    @submit.prevent
  >
    <mdb-modal @close="close">
      <mdb-modal-header>
        <mdb-modal-title>Betaal formulier</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <p class="text-center py-2">
          Kies hieronder een betaalmethode
        </p>

        <mdb-select v-model="paymentMethods" name="payment-method" color="success" required @getValue="selectPaymentMethod" />
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="danger" icon="times" @click="close">
          Sluiten
        </mdb-btn>
        <mdb-btn color="success" icon="coins" iconRight @click="pay">
          Betalen
        </mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
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
    mdbSelect
  },
  props: {
    orderUuid: {
      type: String,
      required: true
    },

    paymentMethods: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedPaymentMethod: null
    }
  },
  computed: {
    ...mapGetters({
      getBaseUrl: 'core/GET_API_BASE_URL',
      getPaymentModal: 'modals/GET_MODAL_BY_NAME_AND_TYPE',
      get_form_by_id: 'forms/GET_FORM_BY_ID'
    })
  },

  methods: {
    selectPaymentMethod(value) {
      this.selectedPaymentMethod = value
    },
    async pay() {
      console.log(this.selectedPaymentMethod)
      if (this.selectedPaymentMethod !== null) {
        const url = `${this.getBaseUrl}/order/retry/payment/${this.orderUuid}`
        const { status, data } = await this.$axios.post(url, {
          paymentMethod: this.selectedPaymentMethod
        })

        if (status === 201) {
          window.location.href = data.checkout
        } else {
          this.$emit('failed')
        }
      }
    },
    close() {
      this.$emit('aborted')
    }
  }
}
</script>

<style scoped>
</style>
