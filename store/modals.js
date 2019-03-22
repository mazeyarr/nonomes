export const state = () => ({
  modals: [
    {
      name: 'guest-register-modal',
      show: false,
      title: '',
      description: ''
    }
  ]
})

export const mutations = {
  hide(state, modalName) {
    state.modals.find(modal => modal.name === modalName).show = false
  },
  show(state, modalName) {
    state.modals.find(modal => modal.name === modalName).show = true
  }
}

export const getters = {
  modalFindByName: state => modalName => {
    return state.modals.find(modal => modal.name === modalName)
  }
}
