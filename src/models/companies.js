import { db } from '../utils/db'

const getCompanies = async () => db.company.findMany()

export default{
  getCompanies,
}
