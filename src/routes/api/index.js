import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import persons from './persons'
import countries from './countries'
import cities from './cities'
import attractions from './attractions'

const router = Router()

router.use(
  basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  }),
)

router.get('/', (req, res) => {
  res.send({ msg: 'Inside API Endpoints' })
})

router.use('/persons', persons)
router.use('/countries', countries)
router.use('/cities', cities)
router.use('/attractions', attractions)

export default router