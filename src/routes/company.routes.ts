import { request, response, Router } from 'express'
import { CreateCompanyController } from '../modules/accounts/useCases/createCompany/CreateCompanyController'
import { GetCompanyController } from '../modules/accounts/useCases/getCompany/GetCompanyController'
import { ListCompanyController } from '../modules/accounts/useCases/listCompany/ListCompanyController'

const companyRoutes = Router()

const getCompanyController = new GetCompanyController()
const listCompanyController = new ListCompanyController()
const createCompanyController = new CreateCompanyController()

companyRoutes.get('/:id', getCompanyController.handle)
companyRoutes.get('/', listCompanyController.handle)
companyRoutes.post('/', createCompanyController.handle)

export { companyRoutes }