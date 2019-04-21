export const state = () => ({
  forms: []
})

export const getters = {
  GET_FORM_BY_ID: state => id => {
    return state.forms.find(form => form.id === id)
  },

  GET_FORM_ELEMENT_BY_ID: (state, getters) => (formId, elementId) => {
    const form = getters.GET_FORM_BY_ID(formId)
    return form.elements.find(element => element.id === elementId)
  },

  GET_FORM_BY_NAME: state => formName => {
    return state.forms.find(form => form.name === formName)
  },

  GET_FORM_ERRORS: (state, getters) => formId => {
    return getters.GET_FORM_BY_ID(formId).errors
  },

  GET_IS_FORM_ELEMENT_VALID: (state, getters) => ({ formId, fieldName }) => {
    const errors = getters.GET_FORM_BY_ID(formId).errors
    const isValid = errors.find(error => error.name === fieldName)

    return isValid === undefined
  }
}

export const mutations = {
  ADD_FORM(state, form) {
    form.errors = []

    form.elements.forEach(element => {
      element.val = ''
      if (element.validate) {
        form.errors.push({
          name: element.name,
          message: element.error
        })
      }
    })

    form.elements.sort((elA, elB) => {
      if (elA.order < elB.order) return -1
      if (elA.order > elB.order) return 1
      return 0
    })
    state.forms.push(form)
  },

  ADD_FORMS(state, forms) {
    forms.map(form => {
      form.errors = []

      form.elements.forEach(element => {
        element.val = ''
        if (element.validate) {
          form.errors.push({
            name: element.name,
            message: element.error
          })
        }
      })

      form.elements.sort((elA, elB) => {
        if (elA.order < elB.order) return -1
        if (elA.order > elB.order) return 1
        return 0
      })
      state.forms.push(form)
    })
  },

  SET_FORM_STATUS(state, { getters, formId, status, toggle }) {
    const formStatus = getters.GET_FORM_BY_ID(formId).status

    Object.keys(formStatus).forEach(statusKey => {
      getters.GET_FORM_BY_ID(formId).status[statusKey] = false
    })

    getters.GET_FORM_BY_ID(formId).status[status] = toggle
  },

  UPDATE_FORM_ELEMENT_VALUE(state, { getters, formId, elementId, value }) {
    const form = getters.GET_FORM_BY_ID(formId)
    const element = getters.GET_FORM_ELEMENT_BY_ID(form.id, elementId)
    element.val = value
  },

  SET_FORM_ELEMENT_ERROR(state, { getters, formId, fieldName, errorMessage }) {
    getters.GET_FORM_BY_ID(formId).errors.push({
      name: fieldName,
      message: errorMessage
    })
  },

  REMOVE_FORM_ELEMENT_ERROR(state, { getters, formId, fieldName }) {
    const filtered = getters.GET_FORM_BY_ID(formId).errors
    const status = getters.GET_FORM_BY_ID(formId).status

    getters.GET_FORM_BY_ID(formId).errors = filtered.filter(error => {
      return error.name !== fieldName
    })

    Object.keys(status).forEach(statusKey => {
      getters.GET_FORM_BY_ID(formId).status[statusKey] = false
    })

    if (getters.GET_FORM_BY_ID(formId).errors.length > 1) {
      getters.GET_FORM_BY_ID(formId).status.error = true
    } else {
      getters.GET_FORM_BY_ID(formId).status.validated = true
    }
  },

  SET_PAYMENT_INITIATED(state, { getters, paymentInfo }) {
    if (getters.GET_FORM_BY_ID(paymentInfo.formId).hasPayment) {
      getters.GET_FORM_BY_ID(paymentInfo.formId).payment = {
        initiated: true,
        paymentId: paymentInfo.paymentId,
        postId: paymentInfo.postId,
        formId: paymentInfo.formId,
        methods: paymentInfo.methods,
        status: 'initiated'
      }
    }
  },

  SET_PAYMENT_STATUS(state, { getters, formId, status }) {
    if (getters.GET_FORM_BY_ID(formId).hasPayment) {
      if (getters.GET_FORM_BY_ID(formId).payment !== null) {
        getters.GET_FORM_BY_ID(formId).payment.status = status
      }
    }
  }
}

export const actions = {
  do_set_form_status({ commit, getters }, { formId, status, toggle }) {
    commit('SET_FORM_STATUS', { getters, formId, status, toggle })
  },

  do_update_form_element_value(
    { commit, getters },
    { formId, elementId, value }
  ) {
    commit('UPDATE_FORM_ELEMENT_VALUE', { getters, formId, elementId, value })
  },

  do_set_form_element_error(
    { commit, getters },
    { formId, fieldName, errorMessage }
  ) {
    commit('REMOVE_FORM_ELEMENT_ERROR', { getters, formId, fieldName })
    commit('SET_FORM_ELEMENT_ERROR', {
      getters,
      formId,
      fieldName,
      errorMessage
    })
  },

  do_remove_form_element_error({ commit, getters }, { formId, fieldName }) {
    commit('REMOVE_FORM_ELEMENT_ERROR', { getters, formId, fieldName })
  },

  do_initiate_payment({ commit, getters }, paymentInfo) {
    commit('SET_PAYMENT_INITIATED', { getters, paymentInfo })
  },

  do_set_payment_status({ commit, getters }, { formId, status }) {
    commit('SET_PAYMENT_STATUS', {
      getters,
      formId,
      status
    })
  }
}
