export const state = () => ({
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
  }
}

export const mutations = {
  setDeviceSize(state) {
    state.device.height = window.innerHeight
    state.device.width = window.innerWidth
    state.device.isSmall = state.device.width < state.smallDeviceWidthLimit
  }
}

export const actions = {}
