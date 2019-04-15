<template>
  <form ref="form">
    <div
      v-if="form !== null"
      class="grey-text"
    >
      <FormElement
        v-for="element in form.elements"
        :key="element.id"
        :element="element"
      />

      <div
        v-if="form.hasTerms"
        id="terms-wrapper"
      >
        <Terms
          v-for="term in form.terms"
          :key="term.id"
          :element="term"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import FormElement from '@/components/form/FormElement'
import Terms from '@/components/form/_elements/Terms'
import serialize from 'form-serialize'

export default {
  name: 'FormBuilder',
  components: {
    FormElement,
    Terms
  },
  props: {
    id: {
      required: true,
      type: Number
    }
  },
  computed: {
    ...mapGetters({
      get_form_by_id: 'forms/GET_FORM_BY_ID'
    }),

    form() {
      return this.get_form_by_id(this.id)
    }
  },
  async mounted() {
    if (this.form === null) {
      const { data } = await this.$axios.get(`/form/${this.form.id}`)
      this.add_form(data)
    }
  },
  methods: {
    ...mapMutations({
      add_form: 'forms/ADD_FORM'
    }),
    ...mapActions({
      set_error: 'forms/do_set_form_element_error'
    }),

    async submit() {
      this.$refs.form.classList.add('was-validated')
      // TODO: select method to pay with on response
      const { status, data } = await this.$axios.post(
        `/post/form/${this.id}`,
        serialize(this.$refs.form)
      )

      if (status === 201) {
        // TODO: check if form has payment to complete form
        if (this.form.hasPayment) {
          console.log(data)
        }
      } else if (status === 203) {
        Object.keys(data).map(fieldName => {
          this.set_error({ formId: this.form.id, fieldName })
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
