import user from './users.mjs'

function setRoutes(app) {
  app.use('/user', user)
}

export default setRoutes
