<template>
  <mdb-modal
    v-show="show"
    size="md"
    class="text-center"
    :success="success"
    :warning="warning"
    :danger="danger"
    @close="confirm = false"
  >
    <slot></slot>
    <mdb-modal-header center :close="false">
      <p class="heading">
        {{ title }}
      </p>
    </mdb-modal-header>
    <mdb-modal-body>
      <mdb-icon v-if="success" icon="thumbs-up" size="4x" class="animated rotateIn" />
      <mdb-icon v-if="warning" icon="exclamation-circle" size="4x" class="animated rotateIn" />
      <mdb-icon v-if="danger" icon="times" size="4x" class="animated rotateIn" />
    </mdb-modal-body>
    <mdb-modal-footer center>
      <mdb-btn :outline="color" @click.native="confirm(true)">
        {{ confirmText }}
      </mdb-btn>
      <mdb-btn :color="color" @click.native="confirm(false)">
        {{ abortText }}
      </mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>
</template>

<script>
import {
  mdbModal,
  mdbModalBody,
  mdbModalFooter,
  mdbModalHeader,
  mdbIcon,
  mdbBtn
} from 'mdbvue'
export default {
  name: 'ConfirmModal',
  components: {
    mdbModal,
    mdbModalBody,
    mdbModalFooter,
    mdbModalHeader,
    mdbIcon,
    mdbBtn
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Weet je zeker dat je niet door wilt?'
    },
    success: {
      type: Boolean,
      required: false,
      default: false
    },
    warning: {
      type: Boolean,
      required: false,
      default: false
    },
    danger: {
      type: Boolean,
      required: false,
      default: false
    },
    confirmText: {
      type: String,
      default: 'Ja'
    },
    abortText: {
      type: String,
      default: 'nee'
    },
    show: {
      required: true,
      type: Boolean,
      default: false
    }
  },
  computed: {
    color() {
      if (this.success) {
        return 'success'
      }

      if (this.warning) {
        return 'warning'
      }

      if (this.danger) {
        return 'danger'
      }

      return 'primary'
    }
  },
  methods: {
    confirm(toggle) {
      if (toggle) {
        return this.$emit('confirmed')
      } else {
        return this.$emit('aborted')
      }
    }
  }
}
</script>

<style scoped>
</style>
