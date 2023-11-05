import { db } from '../utils/db'

export const getCompanies = async () => db.company.findMany()

export const getCompany = async (id) => db.company.findUnique({where:{id}})
