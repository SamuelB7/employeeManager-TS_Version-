import { Request, Response } from "express";
import 'reflect-metadata'
import { container } from "tsyringe";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";


class CreateCompanyController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, cnpj, email, password } = request.body

            const createCompanyUseCase = container.resolve(CreateCompanyUseCase)

            await createCompanyUseCase.execute({name, cnpj, email, password})

            return response.status(201).send()
        } catch (error) {
            return response.json({error: error.message})
        }
    }
}

export { CreateCompanyController }