const redirects = require('../301.json')

export default function({ route, redirect }) {
  const redirectUrl = redirects.find(r => r.from === route.path)
  if (redirectUrl) {
    redirect(301, redirectUrl.to)
  }
}
