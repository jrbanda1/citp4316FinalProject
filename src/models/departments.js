import db from '../utils/db'

export const getDepartment = async () => db.department.findMany()

export const getDepartment = async (id) =>
  db.company.findUnique({ where: { departmentId: id } })

export const addDepartment = async (name, companyId) => db.department.create({ data: { name, companyId } })
