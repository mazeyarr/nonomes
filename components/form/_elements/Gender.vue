<template>
  <mdb-view>
    <mdb-icon class="d-inline-block" icon="venus-mars" size="2x" />
    <p class="d-inline-block mb-0">
      {{ element.placeholder }}
    </p>
    <mdb-input
      :id="`${element.name}-${element.id}-man`"
      class="icon-freeze"
      :name="element.name"
      type="radio"
      icon="mars"
      label="Heer"
      labelClass="icon-freeze"
      value="1"
    />
    <mdb-input
      :id="`${element.name}-${element.name}-women`"
      class="icon-freeze"
      :name="element.name"
      type="radio"
      icon="venus"
      label="Dame"
      labelClass="icon-freeze"
      value="0"
    />
  </mdb-view>
</template>

<script>
import { mdbInput, mdbView, mdbIcon } from 'mdbvue'
export default {
  name: 'Gender',
  components: {
    mdbInput,
    mdbView,
    mdbIcon
  },
  props: {
    element: {
      required: true,
      type: Object,

      name: {
        type: String,
        required: false,
        default: ''
      },
      placeholder: {
        type: String,
        required: false,
        default: ''
      },
      label: {
        type: String,
        required: false,
        default: ''
      },
      val: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: false,
        default: ''
      },
      group: {
        type: Boolean,
        required: false,
        default: false
      },
      validate: {
        type: Boolean,
        required: false,
        default: false
      },
      error: {
        type: String,
        required: false,
        default: 'wrong'
      },
      success: {
        type: String,
        required: false,
        default: 'right'
      }
    }
  },
  data() {
    return {
      gender: {
        man: false,
        women: false
      }
    }
  }
}
</script>

<style scoped>
</style>
