import db from '../utils/db'

export const getAttractions = async (skip, take) => {
  const count = await db.attraction.count()
  const getAttractions = await db.attraction.findMany({
    skip ,
    take,
  })
  return { count, attractions }
}

export const getAttraction = async (id) =>
  db.attraction.findUnique({ where: { attractionId: id } })

export const addAttraction = async (attractionData) =>
  db.attraction.create({ data: { ...attractionData } })

export const updateAttraction = async (id, attractionData) => {
  const attraction = await getAttraction(id)
  if (attraction) {
    return db.attraction.update({
      where: { attractionId: id },
      data: { ...attraction, ...attractionData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteAttraction = async (id) =>
  db.attraction.delete({ where: { attractionId: id } })
