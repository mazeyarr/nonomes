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
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mdbBtn } from 'mdbvue'
export default {
  name: 'Trigger',
  components: {
    mdbBtn
  },
  props: {
    modalId: {
      required: true,
      type: Number
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
  methods: {
    ...mapMutations({
      set_active_modal: 'modals/SET_ACTIVE_MODAL_ID',
      show: 'modals/SET_SHOW_MODAL'
    }),

    trigger() {
      this.set_active_modal(this.modalId)
      this.show(this.modalId)
    }
  }
}
</script>

<style scoped>
</style>
