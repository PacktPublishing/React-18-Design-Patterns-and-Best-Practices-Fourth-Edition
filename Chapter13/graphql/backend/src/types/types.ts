export type User = {
  username: string
  password: string
  email: string
  role: string
  active: boolean
}

export type Sequelize = {
  _defaults?: any
  name?: string
  options?: any
  associate?: any
}
