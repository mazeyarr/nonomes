<template>
  <mdb-input
    v-model="value"
    :name="element.name"
    :label="element.label"
    :icon="element.icon"
    :group="element.group"
    :type="element.type"
    :required="element.validate"
    :customValidation="startValidate"
    :isValid="isValid"
    :validFeedback="element.success"
    :invalidFeedback="error"
    @change="startValidate = true"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mdbInput } from 'mdbvue'
export default {
  name: 'Input',
  components: {
    mdbInput
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
      startValidate: false
    }
  },
  computed: {
    ...mapGetters({
      getForm: 'forms/GET_FORM_BY_ID',
      getElement: 'forms/GET_FORM_ELEMENT_BY_ID',
      getFormErrors: 'forms/GET_FORM_ERRORS',
      getIsValid: 'forms/GET_IS_FORM_ELEMENT_VALID'
    }),

    form() {
      return this.getForm(this.element.form_id)
    },

    error() {
      const error = this.form.errors.find(
        error => error.name === this.element.name
      )

      return error === undefined ? this.element.error : error.message
    },

    isValid() {
      const formId = this.form.id
      const fieldName = this.element.name
      return this.getIsValid({ formId, fieldName })
    },

    value: {
      get() {
        return this.getElement(this.element.form_id, this.element.id).val
      },
      set(value) {
        if (this.element.validate) {
          const params = {
            formId: this.form.id,
            fieldName: this.element.name,
            errorMessage: this.element.error
          }

          switch (this.element.type) {
            case 'tel':
              // eslint-disable-next-line no-useless-escape
              const reTel = /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/
              if (reTel.test(String(value))) {
                this.remove_error(params)
              } else {
                this.set_error(params)
              }
              break

            case 'email':
              // eslint-disable-next-line no-useless-escape
              const reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

              if (reMail.test(String(value).toLocaleLowerCase())) {
                this.remove_error(params)
              } else {
                this.set_error(params)
              }
              break

            case 'text':
            default:
              if (value === '') {
                this.set_error(params)
              } else if (this.element.name.includes('zipcode')) {
                const reZip = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i

                if (reZip.test(String(value).toLocaleLowerCase())) {
                  this.remove_error(params)
                } else {
                  this.set_error(params)
                }
              } else {
                this.remove_error(params)
              }
              break
          }
        }
        this.update({
          formId: this.element.form_id,
          elementId: this.element.id,
          value: value
        })
      }
    }
  },
  methods: {
    ...mapActions({
      update: 'forms/do_update_form_element_value',
      set_error: 'forms/do_set_form_element_error',
      remove_error: 'forms/do_remove_form_element_error'
    })
  }
}
</script>

<style scoped>
</style>
