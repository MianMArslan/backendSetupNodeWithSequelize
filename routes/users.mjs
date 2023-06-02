import express from 'express'
const router = express.Router()

import { getUser } from '../controller/users.mjs'

router.get('/', getUser)
export default router
