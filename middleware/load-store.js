export default async ({ app, store, route, isDev }) => {
  if (isDev) {
    console.time('initPerformance')
    if (!store.getters['core/GET_STORE_INIT'])
      console.info(
        ` %c [load-store] | fetching store`,
        'background: #4284F4; color: #fff'
      )
  }

  if (!store.getters['core/GET_STORE_INIT'])
    await store.dispatch('core/loadStore', { store: store, axios: app.$axios })

  if (isDev) console.timeEnd('initPerformance')
}
