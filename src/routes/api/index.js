import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import persons from './persons'
import companies from './countries'
import departments from './cities'
import employees from './attractions'

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
router.use('/countries', companies)
router.use('/cities', departments)
router.use('/attractions', employees)

export default router