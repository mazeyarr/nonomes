export const state = () => ({
  activeId: 1,
  modals: [],
  staticModals: []
})

export const getters = {
  GET_MODAL_BY_ID: state => id => {
    return state.modals.find(modal => modal.id === id)
  },

  GET_ACTIVE_MODAL: (state, getters) => {
    return getters.GET_MODAL_BY_ID(state.activeId)
  },

  GET_MODAL_BY_NAME_AND_TYPE: state => (name, type) => {
    return state.modals.find(
      modal => modal.name === name && modal.type === type
    )
  }
}

export const mutations = {
  SET_ACTIVE_MODAL_ID(state, id) {
    state.activeId = id
  },

  ADD_MODAL(state, modal) {
    state.modals.push(modal)
  },

  ADD_MODALS(state, modals) {
    modals.map(modal => state.modals.push(modal))
  },

  SET_HIDE_MODAL(state, id) {
    state.modals.find(modal => modal.id === id).show = false
  },

  SET_SHOW_MODAL(state, id) {
    state.modals.find(modal => modal.id === id).show = true
  }
}
