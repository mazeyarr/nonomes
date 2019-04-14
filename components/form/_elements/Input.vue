<template>
  <mdb-input
    v-model="value"
    :name="element.name"
    :label="element.label"
    :icon="element.icon"
    :group="element.group"
    :type="element.type"
    :validate="element.validate"
    :valid="valid"
    :success="element.success"
    :invalid="invalid"
    :error="element.error"
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
  computed: {
    ...mapGetters({
      form: 'forms/GET_FORM_BY_ID',
      getElement: 'forms/GET_FORM_ELEMENT_BY_ID'
    }),

    thisForm() {
      return this.form(this.element.form_id)
    },

    valid() {
      return this.thisForm.validated.indexOf(this.element.name) !== -1
    },

    invalid() {
      return this.thisForm.errors.indexOf(this.element.name) !== -1
    },

    value: {
      get() {
        return this.getElement(this.element.form_id, this.element.id).val
      },
      set(value) {
        const params = {
          formId: this.thisForm.id,
          fieldName: this.element.name
        }

        switch (this.element.type) {
          case 'tel':
            // eslint-disable-next-line no-useless-escape
            const reTel = /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/

            if (reTel.test(String(value))) {
              this.set_valid(params)
            } else {
              this.set_error(params)
            }
            break
          case 'text':
            if (value === '') {
              this.set_error(params)
            } else if (this.element.name.includes('zipcode')) {
              const reZip = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i

              if (reZip.test(String(value).toLocaleLowerCase())) {
                this.set_valid(params)
              } else {
                this.set_error(params)
              }
            } else {
              this.set_valid(params)
            }
            break
          case 'email':
            // eslint-disable-next-line no-useless-escape
            const reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (reMail.test(String(value).toLocaleLowerCase())) {
              this.set_valid(params)
            } else {
              this.set_error(params)
            }
            break
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
      set_valid: 'forms/do_set_form_valid',
      set_error: 'forms/do_set_form_error',
      update: 'forms/do_update_form_element_value'
    })
  }
}
</script>

<style scoped>
</style>
