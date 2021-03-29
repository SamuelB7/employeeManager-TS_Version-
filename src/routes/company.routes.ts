import { request, response, Router } from 'express'

const companyRoutes = Router()

companyRoutes.get('/', (request, response) => {
    return response.json({message: 'Hello World'})
})

export { companyRoutes }