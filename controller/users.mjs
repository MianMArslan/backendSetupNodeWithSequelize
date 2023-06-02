import db from '../models/index.js'
import _ from 'lodash'
import { httpError } from '../common/httpError.mjs'

const { Sequelize } = db
const Op = Sequelize.Op

async function getUser(req, res) {
  return res.success({ data: { test: 'success' } })
}
export { getUser }
