<template>
  <mdb-view>
    <mdb-input
      :id="`${element.name}-${element.id}`"
      ref="checkboxTerm"
      type="checkbox"
      :class="element.styleClasses"
      :name="element.name"
      :group="element.group"
      :label="element.label"
      required
      invalidFeedback="Voorwaarden moet geaccepteerd worden"
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
import { mapActions, mapGetters } from 'vuex'
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
    ...mapGetters({
      getForm: 'forms/GET_FORM_BY_ID'
    }),

    translateTermValue() {
      return this.value ? 1 : 0
    },

    form() {
      return this.getForm(this.element.form_id)
    }
  },
  mounted() {
    if (this.input(this.$refs.checkboxTerm) !== null) {
      const params = {
        formId: this.form.id,
        fieldName: this.element.name
      }

      this.input(this.$refs.checkboxTerm).removeAttribute('checked')
      this.set_error(params)
    }
  },
  methods: {
    input(ref) {
      for (const index in ref.$el.children) {
        const child = ref.$el.children[index]

        if (child instanceof HTMLInputElement) {
          return child
        }
      }
      return null
    },

    change() {
      this.value = !this.value

      const params = {
        formId: this.form.id,
        fieldName: this.element.name
      }
      this.remove_error(params)
    },

    ...mapActions({
      update: 'forms/do_update_form_element_value',
      set_error: 'forms/do_set_form_element_error',
      remove_error: 'forms/do_remove_form_element_error'
    })
  }
}
</script>

<style scoped>
.icon-freeze > .active {
  transform: translate(0px);
}
</style>
