import { Router } from 'express'

import {
  getAttraction,
  getAttractions,
  addAttraction,
  updateAttraction,
  deleteAttraction,
} from '../../models/cityattractions'

const router = Router()

router.get('/', async (req, res) => {
  const size = Number(req.query.size) || 10
  const page = Number(req.query.page) || 1
  const skip = size * (page - 1)
  const take = size
  const { count, attractions } = await getAttractions(skip, take)
  res.set({
    'X-Total-Count': count,
    'X-Total-Pages': Math.ceil(count / size),
  })
  res.send(attractions)
})

router.get('/:id', async (req, res) => {
  const attraction = await getAttraction(req.params.id)
  if (attraction) {
    res.send(attraction)
  } else {
    res.status(404).send({ msg: 'Attraction not found' })
  }
})

router.post('/', async (req, res) => {
  const attraction = await addAttraction(req.body)
  res.send(attraction)
})

router.put('/:id', async (req, res) => {
  const attraction = await updateAttraction(req.params.id, req.body)
  if (attraction) {
    res.send(attraction)
  } else {
    res.status(404).send({ msg: 'Attraction not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const attraction = await deleteAttraction(req.params.id)
  if (attraction) {
    res.send(attraction)
  } else {
    res.status(404).send({ msg: 'Attraction not found' })
  }
})

export default router
