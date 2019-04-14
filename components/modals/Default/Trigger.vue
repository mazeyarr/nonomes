<template>
  <div @click="show(modalId)">
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
      show: 'modals/show'
    })
  }
}
</script>

<style scoped>
</style>
