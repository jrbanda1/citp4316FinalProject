import { Router } from 'express'

import { getCountries, getCountry, addCountry } from '../../models/countries'
import { addCity, addCountry } from '../../models/cities'

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
  const countryName = req.body.name
  if (countryName) {
    const country = await addCountry(countryName)
    res.send(country)
  } else {
    res.status(400).send({ msg: 'Country name is required' })
  }
})

router.post('/:id', async (req, res) => {
  const countryId = req.params.id
  const country = await getCountry(countryId)
  if (country) {
    const cityName = req.body.name
    if (cityName) {
      const city = await addCity(cityName, countryId)
      res.send(city)
    } else {
      res.status(400).send({ msg: 'City name not here' })
    }
  } else {
    res.status(400).send({ msg: 'Country does not exist' })
  }
})

export default router