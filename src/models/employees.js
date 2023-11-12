import db from '../utils/db'

export const getEmployees - async () => db.employee.findMany()

export const getEmployee = async (id) =>
  db.employee.findUnique({ where: { employeeId: id } })

export const addEmployee = async (name, departmentId) =>
  db.employee.create({ data: { name, departmentId } })

export const updateEmployee = async (id, name, departmentId ) => {
 db.employee.update({
  where:{ employeeId: id},
  data: {name, departmentId},
 })

export const deleteEmployee = async (id) =>
  db.employee.delete({ where: { employeeId: id } })
