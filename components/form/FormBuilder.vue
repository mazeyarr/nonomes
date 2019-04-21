<template>
  <form ref="form" novalidate @submit.prevent>
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

    <PaymentModal
      v-if="form.hasPayment"
      ref="paymentModal"
      :paymentInfo="paymentInfo"
      @aborted="paymentAborted"
    />
  </form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import FormElement from '@/components/form/FormElement'
import Terms from '@/components/form/_elements/Terms'
import PaymentModal from '@/components/modals/Payment/index'
import serialize from 'form-serialize'

export default {
  name: 'FormBuilder',
  components: {
    FormElement,
    Terms,
    PaymentModal
  },
  props: {
    id: {
      required: true,
      type: Number
    }
  },
  computed: {
    ...mapGetters({
      get_form_by_id: 'forms/GET_FORM_BY_ID',
      getModal: 'modals/GET_MODAL_BY_NAME_AND_TYPE'
    }),

    form() {
      return this.get_form_by_id(this.id)
    },

    formStatus() {
      return this.get_form_by_id(this.id).status
    },

    paymentInfo() {
      if (this.formStatus.waitingForPayment) {
        this.$refs.paymentModal.formatPaymentMethods()
        return this.form.payment
      } else {
        return {
          formId: this.form.id,
          postId: null,
          paymentId: null,
          methods: []
        }
      }
    },

    paymentModal() {
      return this.getModal('payment-methods-modal', 'payment')
    }
  },
  watch: {
    form: {
      handler: function(formChange) {
        if (formChange.payment !== undefined) {
          if (formChange.payment.status === 'initiated') {
            // TODO: ping payment has started
          }
        }
      },
      deep: true
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
      add_form: 'forms/ADD_FORM',
      showModal: 'modals/SET_SHOW_MODAL'
    }),
    ...mapActions({
      set_form_status: 'forms/do_set_form_status',
      set_error: 'forms/do_set_form_element_error',
      initPay: 'forms/do_initiate_payment'
    }),

    async submit() {
      this.$refs.form.classList.add('was-validated')

      if (!this.form.status.error) {
        const { status, data } = await this.$axios.post(
          `/post/form/${this.id}`,
          serialize(this.$refs.form)
        )

        if (status === 201) {
          if (this.form.hasPayment) {
            this.initPay({
              formId: data.formId,
              postId: data.postId,
              paymentId: data.paymentId,
              methods: data.methods
            })

            this.set_form_status({
              formId: this.form.id,
              status: 'waitingForPayment',
              toggle: true
            })

            this.showModal(this.paymentModal.id)
          }
        } else if (status === 203) {
          Object.keys(data).map(fieldName => {
            this.set_error({
              formId: this.form.id,
              fieldName,
              errorMessage: data[fieldName][0]
            })
          })
        }
      }
    },

    paymentAborted() {
      // TODO: DISABLE FORM
      // TODO: MAKE RETRY METHOD
      alert('catched abort')
    }
  }
}
</script>

<style scoped>
</style>
