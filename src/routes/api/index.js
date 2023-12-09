import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import countries from './countries'
import cities from './cities'

const router = Router()

router.use(
  basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  }),
)

router.get('/', (req, res) => {
  res.send({ msg: 'Inside API Endpoints' })
})

router.use('/countries', countries)
router.use('/cities', cities)

export default router