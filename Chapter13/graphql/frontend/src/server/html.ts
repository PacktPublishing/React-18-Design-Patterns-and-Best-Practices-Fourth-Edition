// Config
import * as config from '~/config'

type HTMLMetaData = {
  title?: string
  initialState?: any
}

const html = (options: HTMLMetaData) => {
  const { title = config.page.title, initialState = {} } = options

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <script defer="" src="${config.publicPath}vendor.js"></script>
        <script defer="" src="${config.publicPath}main.js"></script>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  `
}

export default html
