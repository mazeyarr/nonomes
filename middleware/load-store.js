export default async ({ app, store, route, isDev }) => {
  if (isDev) {
    console.time('initPerformance')
    console.info(
      ` %c [lo-st] | fetching store: [route]`,
      'background: #4284F4; color: #fff'
    )
  }

  if (!store.getters['core/GET_STORE_INIT'])
    await store.dispatch('core/loadStore', { store: store, axios: app.$axios })

  console.timeEnd('initPerformance')
}
