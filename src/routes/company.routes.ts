import { request, response, Router } from 'express'
import { CreateCompanyController } from '../modules/accounts/useCases/createCompany/CreateCompanyController'
import { ListCompanyController } from '../modules/accounts/useCases/listCompany/ListCompanyController'

const companyRoutes = Router()

const listCompanyController = new ListCompanyController()
const createCompanyController = new CreateCompanyController()

companyRoutes.get('/', listCompanyController.handle)
companyRoutes.post('/', createCompanyController.handle)

export { companyRoutes }