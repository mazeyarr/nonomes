export const state = () => ({
  activeId: 1,
  modals: []
})

export const getters = {
  GET_ACTIVE_MODAL: (state, getters) => {
    return getters.GET_MODAL_BY_ID(state.activeId)
  },
  GET_MODAL_BY_ID: state => id => {
    return state.modals.find(modal => modal.id === id)
  },
  modalFindByName: state => modalName => {
    return state.modals.find(modal => modal.name === modalName)
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
  hide(state, id) {
    state.modals.find(modal => modal.id === id).show = false
  },
  show(state, id) {
    state.modals.find(modal => modal.id === id).show = true
  }
}
