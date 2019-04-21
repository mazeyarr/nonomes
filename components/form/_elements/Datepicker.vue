<template>
  <mdb-view>
    <mdb-icon
      class="d-none d-md-inline-block datePickerIcon"
      :icon="element.icon"
    />
    <mdb-date-picker
      ref="datepicker"
      class="d-inline-block datePicker"
      :option="datePickerOptions"
      @getValue="getPickerValue"
    />
    <div v-show="!isValid" class="datepicker-invalid">
      {{ error }}
    </div>
    <input
      v-model="value"
      type="text"
      class="d-none"
      :name="element.name"
    >
  </mdb-view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mdbView, mdbIcon, mdbDatePicker } from 'mdbvue'
import moment from 'moment'
export default {
  name: 'Datepicker',
  components: {
    mdbView,
    mdbIcon,
    mdbDatePicker
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
      datePickerOptions: {
        format: 'DD-MM-YYYY',
        SundayFirst: false,
        autoHide: true,
        week: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
        month: [
          'Januari',
          'Februari',
          'Maart',
          'April',
          'Mei',
          'Juni',
          'Juli',
          'Augustus',
          'September',
          'Oktober',
          'November',
          'December'
        ],
        placeholder: this.element.placeholder,
        buttons: {
          ok: 'Bevestig',
          cancel: 'Annuleren',
          today: 'Vandaag',
          clear: 'Reset'
        }
      }
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

    input() {
      for (const index in this.$refs.datepicker.$children[0].$el.children) {
        const child = this.$refs.datepicker.$children[0].$el.children[index]

        if (child instanceof HTMLInputElement) {
          return child
        }
      }
      return null
    },

    error() {
      const error = this.form.errors.find(
        error => error.name === this.element.name
      )

      return error === undefined ? this.element.error : error.message
    },

    value: {
      get() {
        return this.getElement(this.element.form_id, this.element.id).val
      },
      set(value) {
        this.update({
          formId: this.element.form_id,
          elementId: this.element.id,
          value: value
        })
      }
    },

    isValid() {
      const formId = this.form.id
      const fieldName = this.element.name
      return this.getIsValid({ formId, fieldName })
    }
  },
  mounted() {
    if (this.input !== null) {
      this.input.setAttribute('required', 'required')
      this.input.setAttribute('disabled', 'disabled')
    }
  },
  methods: {
    ...mapActions({
      update: 'forms/do_update_form_element_value',
      set_error: 'forms/do_set_form_element_error',
      remove_error: 'forms/do_remove_form_element_error'
    }),

    getPickerValue(value) {
      const params = {
        formId: this.form.id,
        fieldName: this.element.name,
        errorMessage: this.error
      }

      if (value === '' || !moment(value, 'DD-MM-YYYY').isValid()) {
        this.set_error(params)
        this.setValid(false)
      } else {
        this.remove_error(params)
        this.setValid(true)
      }

      this.update({
        formId: this.element.form_id,
        elementId: this.element.id,
        value: value
      })
    },

    setValid(toggle) {
      if (this.input !== null) {
        this.input.classList.remove('is-valid')
        this.input.classList.remove('valid')
        this.input.classList.remove('is-invalid')
        this.input.classList.remove('invalid')

        if (toggle) {
          this.input.classList.add('valid')
          this.input.classList.add('is-valid')
        } else {
          this.input.classList.add('invalid')
          this.input.classList.add('is-invalid')
        }
      }
    }
  }
}
</script>

<style scoped>
.datePicker {
  width: 91%;
}
.datePickerIcon {
  font-size: 2em;
  margin-right: 8px;
}
.datepicker-invalid {
  width: 100%;
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 80%;
  color: #dc3545;
}

@media only screen and (max-width: 580px) {
  .datePicker {
    width: 100%;
  }
}
</style>
