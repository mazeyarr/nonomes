export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('core/load')
  }
}
