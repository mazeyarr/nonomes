<template>
  <div @click="show(modal)">
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
  data() {
    return {
      modal: 'guest-register-modal'
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
