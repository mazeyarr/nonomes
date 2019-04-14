<template>
  <mdb-view>
    <mdb-input
      :id="`${element.name}-${element.id}`"
      type="checkbox"
      :class="element.styleClasses"
      :name="element.name"
      :validate="element.validate"
      :group="element.group"
      :label="element.label"
      @change="change"
    />
    <input
      :name="element.name"
      :value="translateTermValue"
      type="checkbox"
      :checked="value"
      class="d-none"
    >
  </mdb-view>
</template>

<script>
import { mdbView, mdbInput } from 'mdbvue'
export default {
  name: 'Terms',
  components: {
    mdbView,
    mdbInput
  },
  props: {
    element: {
      type: Object,
      required: true,

      id: {
        required: true,
        type: String
      },
      label: {
        required: true,
        type: String
      },
      name: {
        required: true,
        type: String
      },
      group: {
        required: true,
        type: Boolean
      },
      validate: {
        required: true,
        type: Boolean
      },
      styleClasses: {
        required: true,
        type: String
      }
    }
  },
  data() {
    return {
      value: false
    }
  },
  computed: {
    translateTermValue() {
      return this.value ? 1 : 0
    }
  },
  methods: {
    change() {
      this.value = !this.value
    }
  }
}
</script>

<style scoped>
.icon-freeze > .active {
  transform: translate(0px);
}
</style>
