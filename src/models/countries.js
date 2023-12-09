import db from '../utils/db'

export const getCountries = async () => db.country.findMany()

export const getCountry = async (id) =>
  db.country.findUnique({
    where: { countryId: id },
    include: {
      cities: true,
    },
  })

export const addCountry = async (name) => db.country.create({ data: { name } })