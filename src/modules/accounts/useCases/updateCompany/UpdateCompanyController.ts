import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";


class UpdateCompanyController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id, name, cnpj, email, password } = request.body

            const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase)

            updateCompanyUseCase.execute({id, name, cnpj, email, password})

            return response.json('Company Updated!')
        } catch (error) {
            return response.json({error: error.message})
        }
    }
}

export { UpdateCompanyController }