import { Router } from 'express'

import { getCountries, getCountry, addCountry } from '../../models/countries'
import { addDepartment } from '../../models/cities'

const router = Router()

router.get('/', async (req, res) => {
  const countries = await getCountries()
  res.send(countries)
})

router.get('/:id', async (req, res) => {
  const country = await getCountry(req.params.id)
  if (country) {
    res.send(country)
  } else {
    res.status(404).send({ msg: 'Country not found' })
  }
})

router.post('/', async (req, res) => {
  const companyName = req.body.name
  if (companyName) {
    const company = await addCompany(companyName)
    res.send(company)
  } else {
    res.status(400).send({ msg: 'Company name is required' })
  }
})

router.post('/:id', async (req, res) => {
  const companyId = req.params.id
  const company = await getCompany(companyId)
  if (company) {
    const departmentName = req.body.name
    if (departmentName) {
      const department = await addDepartment(departmentName, companyId)
      res.send(department)
    } else {
      res.status(400).send({ msg: 'Department name not here' })
    }
  } else {
    res.status(400).send({ msg: 'Company does not exist' })
  }
})

export default router