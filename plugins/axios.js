export default function({ $axios, store }) {
  $axios.onRequest(config => {
    config.headers.common.Accept = 'application/json'
  })
}
