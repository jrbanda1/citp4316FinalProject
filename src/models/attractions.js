import db from '../utils/db'

export const getEmployees = async (skip, take) => {
  const count = await db.attraction.count()
  const employees = await db.attraction.findMany({
    skip ,
    take,
  })
  return { count, attraction }
}

export const getEmployee = async (id) =>
  db.attraction.findUnique({ where: { employeeId: id } })

export const addEmployee = async (employeeData) =>
  db.attraction.create({ data: { ...employeeData } })

export const updateEmployee = async (id, employeeData) => {
  const attraction = await getEmployee(id)
  if (attraction) {
    return db.attraction.update({
      where: { employeeId: id },
      data: { ...attraction, ...employeeData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteEmployee = async (id) =>
  db.attraction.delete({ where: { employeeId: id } })
