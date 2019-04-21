<template>
  <div @click="trigger">
    <mdb-btn
      v-if="type === 'button'"
      :block="block"
      :color="color"
    >
      <slot />
    </mdb-btn>

    <slot v-if="type === 'in-case'" />
    <PaymentModal
      v-if="form.hasPayment"
      ref="paymentModal"
      class="position-absolute"
      :paymentInfo="paymentInfo"
      @aborted="paymentAborted"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mdbBtn } from 'mdbvue'
import PaymentModal from '@/components/modals/Payment/index'

export default {
  name: 'Trigger',
  components: {
    mdbBtn,
    PaymentModal
  },
  props: {
    orderUuid: {
      type: String,
      required: true
    },

    type: {
      required: true,
      default: '',
      type: String
    },

    color: {
      required: false,
      default: '',
      type: String
    },

    block: {
      required: false,
      type: Boolean
    }
  },
  computed: {
    modal() {
      return this.getModal('payment-methods-modal', 'payment')
    }
  },
  async mounted() {
    const { data } = await this.$axios.get(`/order/retry/${this.orderUuid}`)
    console.log(data)
  },
  methods: {
    ...mapMutations({
      getModal: 'modals/GET_MODAL_BY_NAME_AND_TYPE',
      show: 'modals/SET_SHOW_MODAL'
    }),

    trigger() {
      this.show(this.modal.id)
    }
  }
}
</script>

<style scoped>
</style>
