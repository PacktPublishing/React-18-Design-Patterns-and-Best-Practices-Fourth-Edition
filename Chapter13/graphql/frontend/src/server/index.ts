import { PORT } from '../config'
import app from './server'

const server = app.listen(PORT, () => {
  if (module.hot) {
    // eslint-disable-next-line no-console
    console.log('🚀🚀🚀 Server hot reloading enabled 🚀🚀🚀')
  }

  // eslint-disable-next-line no-console
  console.log(`🍺🍺🍺 Listening on port ${PORT} 🍺🍺🍺`)
})

if (module.hot) {
  module.hot.accept()

  module.hot.dispose(() => server.close())
}
