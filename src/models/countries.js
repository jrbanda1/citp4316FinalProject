import db from '../utils/db'

export const getCompanies = async () => db.country.findMany()

export const getCompany = async (id) =>
  db.country.findUnique({
    where: { companyId: id },
    include: {
      city: true,
    },
  })

export const addCompany = async (name) => db.country.create({ data: { name } })