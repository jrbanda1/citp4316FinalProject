import db from '../utils/db'

export const getDepartments = async () => db.city.findMany()

export const getDepartment = async (id) =>
  db.city.findUnique({ where: { departmentId: id } })

export const addDepartment = async (name, companyId) =>
  db.city.create({ data: { name, companyId } })