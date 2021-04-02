import { Router } from 'express'
import { companyRoutes } from './company.routes'
import { sessionRoutes } from './session.routes'


const router = Router()

router.use('/company', companyRoutes)
router.use(sessionRoutes)


export { router }