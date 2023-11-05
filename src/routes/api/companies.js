import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  const companies = null
  res.send(companies)
})

export default router
