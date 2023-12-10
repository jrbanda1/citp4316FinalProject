import db from '../utils/db'

export const getCities= async (skip, take) => {
  const count = await db.city.count()
  const cities = await db.city.findMany({
    skip ,
    take,
  })
  return { count, cities }
}

export const getCities = async (id) =>
  db.city.findUnique({ where: { cityId: id } })

export const addcity = async (cityData) =>
  db.city.create({ data: { ...cityData } })

export const udpateCity = async (id, cityData) => {
  const city = await getCity(id)
  if (city) {
    return db.city.update({
      where: { cityId: id },
      data: { ...city, ...cityData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteCity = async (id) =>
  db.city.delete({ where: { cityId: id } })
