import { request, response, Router } from 'express'
import { CreateCompanyController } from '../modules/accounts/useCases/createCompany/CreateCompanyController'

const companyRoutes = Router()

const createCompanyController = new CreateCompanyController()

companyRoutes.get('/', (request, response) => {
    return response.json({message: 'Hello World'})
})

companyRoutes.post('/', createCompanyController.handle)

export { companyRoutes }