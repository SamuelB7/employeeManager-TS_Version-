import { Router } from 'express'
import { isLogged } from '../middlewares/isLogged'
import { CreateEmployeeController } from '../modules/employees/useCases/createEmployee/CreateEmployeeController'

const employeeRoutes = Router()

const createEmployeeController = new CreateEmployeeController()

employeeRoutes.use(isLogged)
employeeRoutes.post('/', createEmployeeController.handle)

export{ employeeRoutes }