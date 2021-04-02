import { request, response, Router } from 'express'
import { CreateCompanyController } from '../modules/accounts/useCases/createCompany/CreateCompanyController'
import { DeleteCompanyController } from '../modules/accounts/useCases/deleteCompany/DeleteCompanyController'
import { GetCompanyController } from '../modules/accounts/useCases/getCompany/GetCompanyController'
import { ListCompanyController } from '../modules/accounts/useCases/listCompany/ListCompanyController'
import { UpdateCompanyController } from '../modules/accounts/useCases/updateCompany/UpdateCompanyController'

const companyRoutes = Router()

const getCompanyController = new GetCompanyController()
const listCompanyController = new ListCompanyController()
const createCompanyController = new CreateCompanyController()
const updateCompanyController = new UpdateCompanyController()
const deleteCompanyController = new DeleteCompanyController()

companyRoutes.get('/:id', getCompanyController.handle)
companyRoutes.get('/', listCompanyController.handle)
companyRoutes.post('/', createCompanyController.handle)
companyRoutes.put('/', updateCompanyController.handle)
companyRoutes.delete('/', deleteCompanyController.handle)

export { companyRoutes }