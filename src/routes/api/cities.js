import { Router } from 'express'

import { getCity, getCities } from '../../models/cities'

const router = Router()

router.get('/', async (req, res) => {
  const cities = await getCities()
  res.send(cities)
})

router.get('/:id', async (req, res) => {
  const city = await getCity(req.params.id)
  if (city) {
    res.send(city)
  } 
  else {
    res.status(404).send({ msg: 'City Not Found' })
  }
})

export default router
