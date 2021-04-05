import { Router } from 'express'
import { isLogged } from '../middlewares/isLogged'
import { CreateEmployeeController } from '../modules/employees/useCases/createEmployee/CreateEmployeeController'
import multer from 'multer'
import uploads from '../config/uploads'
import { UpdateEmployeeController } from '../modules/employees/useCases/updateEmployee/UpdateEmployeeController'

const employeeRoutes = Router()

const uploadPhoto = multer(uploads.upload('./employee_photos'))

const createEmployeeController = new CreateEmployeeController()
const updateEmployeeController = new UpdateEmployeeController()

employeeRoutes.use(isLogged)
employeeRoutes.post('/', uploadPhoto.single('photo'), createEmployeeController.handle)
employeeRoutes.put('/', uploadPhoto.single('photo'), updateEmployeeController.handle)

export{ employeeRoutes }