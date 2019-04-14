export const state = () => ({
  forms: []
})

export const getters = {
  GET_FORM_BY_ID: state => id => {
    return state.forms.find(form => form.id === id)
  },
  GET_FORM_BY_NAME: state => formName => {
    return state.forms.find(form => form.name === formName)
  },
  GET_FORM_ELEMENT_BY_ID: state => (formId, elementId) => {
    const form = state.forms.find(form => form.id === formId)
    return form.elements.find(element => element.id === elementId)
  }
}

export const mutations = {
  ADD_FORM(state, form) {
    form.validated = []
    form.errors = []
    form.elements.forEach(element => (element.val = ''))
    form.elements.sort((elA, elB) => {
      if (elA.order < elB.order) return -1
      if (elA.order > elB.order) return 1
      return 0
    })
    state.forms.push(form)
  },

  ADD_FORMS(state, forms) {
    forms.map(form => {
      form.validated = []
      form.errors = []
      form.elements.forEach(element => (element.val = ''))
      form.elements.sort((elA, elB) => {
        if (elA.order < elB.order) return -1
        if (elA.order > elB.order) return 1
        return 0
      })
      state.forms.push(form)
    })
  },

  REMOVE_FORM_STATUS_IF_EXISTS(state, { getters, formId, fieldName, inArray }) {
    const form = getters.GET_FORM_BY_ID(formId)
    const fieldIndex = form[inArray].indexOf(fieldName)

    if (fieldIndex !== -1) {
      form[inArray].splice(fieldIndex)
    }
  },

  SET_FORM_ERROR(state, { getters, formId, fieldName }) {
    const form = getters.GET_FORM_BY_ID(formId)
    form.errors.push(fieldName)
  },

  SET_FORM_VALID(state, { getters, formId, fieldName }) {
    const form = getters.GET_FORM_BY_ID(formId)
    form.validated.push(fieldName)
  },

  UPDATE_FORM_ELEMENT_VALUE(state, { getters, formId, elementId, value }) {
    const form = getters.GET_FORM_BY_ID(formId)
    const element = getters.GET_FORM_ELEMENT_BY_ID(form.id, elementId)
    element.val = value
  }
}

export const actions = {
  do_update_form_element_value(
    { commit, getters },
    { formId, elementId, value }
  ) {
    commit('UPDATE_FORM_ELEMENT_VALUE', { getters, formId, elementId, value })
  },

  do_set_form_error({ commit, getters }, { formId, fieldName }) {
    let hasErrorAlready = false

    getters.GET_FORM_BY_ID(formId).errors.forEach(errField => {
      if (errField === fieldName) {
        hasErrorAlready = true
      }
    })

    commit('REMOVE_FORM_STATUS_IF_EXISTS', {
      getters,
      formId,
      fieldName,
      inArray: 'validated'
    })

    if (!hasErrorAlready)
      commit('SET_FORM_ERROR', { getters, formId, fieldName })
  },

  do_set_form_valid({ commit, getters }, { formId, fieldName }) {
    let hasValidAlready = false
    getters.GET_FORM_BY_ID(formId).validated.forEach(validField => {
      if (validField === fieldName) {
        hasValidAlready = true
      }
    })

    commit('REMOVE_FORM_STATUS_IF_EXISTS', {
      getters,
      formId,
      fieldName,
      inArray: 'errors'
    })

    if (!hasValidAlready)
      commit('SET_FORM_VALID', { getters, formId, fieldName })
  }
}
