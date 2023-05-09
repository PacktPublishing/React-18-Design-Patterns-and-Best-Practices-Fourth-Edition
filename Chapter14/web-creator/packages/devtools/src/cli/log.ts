import cliColor from 'cli-color'

type Args = {
  text?: string
  tag?: string
  json?: any
  type?: 'info' | 'error' | 'warning'
}

export const log = (args: Args | any) => {
  const blockColor: any = {
    info: cliColor.bgCyan.whiteBright.bold,
    error: cliColor.bgRed.whiteBright.bold,
    warning: cliColor.bgYellow.blackBright.bold
  }

  const textColor: any = {
    info: cliColor.blue,
    error: cliColor.red,
    warning: cliColor.yellow
  }

  if (typeof args === 'string') {
    console.info(textColor.info(args))
  }

  const { tag, json, type } = args

  if (tag && json) {
    console.info(blockColor[type](`<<< BEGIN ${tag.toUpperCase()}`))
    console.info(textColor[type](JSON.stringify(json, null, 2)))
    console.info(blockColor[type](`END ${tag.toUpperCase()} >>>`))
  }
}
