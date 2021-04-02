import { Router } from 'express'
import { SessionController } from '../modules/accounts/useCases/session/SessionController'

const sessionRoutes = Router()

const sessionController = new SessionController()

sessionRoutes.post('/session', sessionController.handle)

export { sessionRoutes }