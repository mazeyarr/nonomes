<template>
  <div>
    <mdb-icon class="d-inline-block" icon="venus-mars" size="2x" />
    <p class="d-inline-block mb-0">
      {{ element.placeholder }}
    </p>
    <mdb-input
      :id="`${element.name}-${element.id}-man`"
      ref="radioMen"
      :name="element.name"
      type="radio"
      icon="mars"
      iconClass="icon-align"
      label="Heer"
      labelClass="icon-freeze"
      value="1"
      required
      @change="validate('man')"
    />
    <mdb-input
      :id="`${element.name}-${element.id}-women`"
      ref="radioWomen"
      :name="element.name"
      type="radio"
      icon="venus"
      iconClass="icon-align"
      label="Dame"
      value="0"
      required
      :invalidFeedback="error"
      @change="validate('women')"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
  computed: {
    ...mapGetters({
      getForm: 'forms/GET_FORM_BY_ID',
      getElement: 'forms/GET_FORM_ELEMENT_BY_ID',
      getFormErrors: 'forms/GET_FORM_ERRORS'
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

    inputMan() {
      return this.input(this.$refs.radioMan)
    },

    inputWomen() {
      return this.input(this.$refs.radioWomen)
    }
  },
  mounted() {
    const params = {
      formId: this.form.id,
      fieldName: this.element.name,
      errorMessage: this.element.error
    }

    this.set_error(params)

    if (this.inputWomen !== null) {
      this.inputWomen.removeAttribute('checked')
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

    validate(selection) {
      const params = {
        formId: this.form.id,
        fieldName: this.element.name
      }

      this.remove_error(params)

      if (selection === 'man') {
        this.update({
          formId: this.element.form_id,
          elementId: this.element.id,
          value: 1
        })
      } else {
        this.update({
          formId: this.element.form_id,
          elementId: this.element.id,
          value: 0
        })
      }
    },

    ...mapActions({
      update: 'forms/do_update_form_element_value',
      set_error: 'forms/do_set_form_element_error',
      remove_error: 'forms/do_remove_form_element_error'
    })
  }
}
</script>

<style>
.icon-align {
  min-width: 15px;
}
</style>
