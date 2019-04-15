<template>
  <div>
    <mdb-icon class="d-inline-block" icon="venus-mars" size="2x" />
    <p class="d-inline-block mb-0">
      {{ element.placeholder }}
    </p>
    <mdb-input
      :id="`${element.name}-${element.id}-man`"
      :name="element.name"
      type="radio"
      icon="mars"
      iconClass="icon-align"
      label="Heer"
      labelClass="icon-freeze"
      value="1"
      required
    />
    <mdb-input
      :id="`${element.name}-${element.name}-women`"
      ref="radioWomen"
      :name="element.name"
      type="radio"
      icon="venus"
      iconClass="icon-align"
      label="Dame"
      value="0"
      required
      :invalidFeedback="element.error"
    />
  </div>
</template>

<script>
import { mdbInput, mdbIcon } from 'mdbvue'
export default {
  name: 'Gender',
  components: {
    mdbInput,
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
  },
  mounted() {
    for (const index in this.$refs.radioWomen.$el.children) {
      const child = this.$refs.radioWomen.$el.children[index]

      if (child instanceof HTMLInputElement) {
        child.removeAttribute('checked')
      }
    }
  }
}
</script>

<style>
.icon-align {
  min-width: 15px;
}
</style>
