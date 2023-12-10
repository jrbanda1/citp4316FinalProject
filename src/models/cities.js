import db from '../utils/db'

export const getCities = async () => db.city.findMany()

export const getCity = async (id) =>
  db.city.findUnique({ where: { cityId: id } })

export const addCity = async (name, countryId) =>
  db.city.create({ data: { name, countryId } })