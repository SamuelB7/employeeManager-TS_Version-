import { Request, Response } from "express";
import { container } from "tsyringe";
import { SessionUseCase } from "./SessionUseCase";



class SessionController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {email, password} = request.body

            const sessionUseCase = container.resolve(SessionUseCase)

            const token = await sessionUseCase.execute({email, password})

            return response.json(token)
        } catch (error) {
            return response.json({error: error.message})
        }
    }
}

export { SessionController }