import { Router } from 'express'

import {getCompanies} from '../../models/companies'

const router = Router()

router.get('/', async (req, res) => {
  const companies = await getCompanies()
  res.send(companies)
})

export default router
