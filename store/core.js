export const state = () => ({
  apiBaseUrl: 'http://otter.localhost/api',
  loading: true,
  storeInitExecuted: false,
  smallDeviceWidthLimit: 1050,
  device: {
    height: 0,
    width: 0,
    isSmall: false
  }
})

export const getters = {
  getDevice(state) {
    return state.device
  },
  GET_STORE_INIT(state) {
    return state.storeInitExecuted
  },
  GET_LOADING(state) {
    return state.loading
  }
}

export const mutations = {
  SET_STORE(state, { store, data }) {
    // store.commit('pages/SET_ARTICLES', data.articles)
    store.commit('pages/SET_PAGES', data.pages)
    store.commit('pages/SET_SECTIONS', data.sections)
    store.commit('modals/ADD_MODALS', data.modals)
    store.commit('forms/ADD_FORMS', data.forms)
  },
  SET_LOADING(state, toggle) {
    state.loading = toggle
  },
  SET_LOADED_STORE(state, toggle) {
    state.storeInitExecuted = toggle
  },

  setDeviceSize(state) {
    state.device.height = window.innerHeight
    state.device.width = window.innerWidth
    state.device.isSmall = state.device.width < state.smallDeviceWidthLimit
  }
}

export const actions = {
  loadStore({ state, commit }, { store, axios }) {
    return new Promise(resolve => {
      commit('SET_LOADING', true)
      axios.get(`${state.apiBaseUrl}/store`).then(resp => {
        // console.log(resp)
        commit('SET_STORE', { store, data: resp.data.store })
        commit('SET_LOADED_STORE', true)
        commit('SET_LOADING', false)
        resolve()
      })
    })
  }
}
