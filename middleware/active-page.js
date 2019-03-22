export default function({ app, route, isDev }) {
  if (isDev) {
    console.info(
      ` %c route-name: ${route.name} `,
      'background: #4284F4; color: #fff'
    )
  }

  app.store.commit('core/setDeviceSize')

  app.store.commit('pages/setPageActive', route.name)
}
