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
  GET_FORM_ELEMENT_BY_ID: (state, getters) => (formId, elementId) => {
    const form = getters.GET_FORM_BY_ID(formId)
    return form.elements.find(element => element.id === elementId)
  },
  GET_FORM_ERRORS: (state, getters) => formId => {
    return getters.GET_FORM_BY_ID(formId).errors
  }
}

export const mutations = {
  ADD_FORM(state, form) {
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

  UPDATE_FORM_ELEMENT_VALUE(state, { getters, formId, elementId, value }) {
    const form = getters.GET_FORM_BY_ID(formId)
    const element = getters.GET_FORM_ELEMENT_BY_ID(form.id, elementId)
    element.val = value
  },

  SET_FORM_ELEMENT_ERROR(state, { getters, formId, fieldName }) {
    getters.GET_FORM_BY_ID(formId).errors.push(fieldName)
  },

  REMOVE_FORM_ELEMENT_ERROR(state, { getters, formId, fieldName }) {
    const errors = getters.GET_FORM_BY_ID(formId).errors
    const indexOfFieldNameInErrors = errors.indexOf(fieldName)
    if (indexOfFieldNameInErrors !== -1) {
      getters.GET_FORM_BY_ID(formId).errors.splice(indexOfFieldNameInErrors)
    }
  }
}

export const actions = {
  do_update_form_element_value(
    { commit, getters },
    { formId, elementId, value }
  ) {
    commit('UPDATE_FORM_ELEMENT_VALUE', { getters, formId, elementId, value })
  },

  do_set_form_element_error({ commit, getters }, { formId, fieldName }) {
    commit('REMOVE_FORM_ELEMENT_ERROR', { getters, formId, fieldName })
    commit('SET_FORM_ELEMENT_ERROR', { getters, formId, fieldName })
  },

  do_remove_form_element_error({ commit, getters }, { formId, fieldName }) {
    commit('REMOVE_FORM_ELEMENT_ERROR', { getters, formId, fieldName })
  }
}
