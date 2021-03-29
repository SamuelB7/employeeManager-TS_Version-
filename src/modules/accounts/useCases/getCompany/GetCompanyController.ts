import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetCompanyUseCase } from "./GetCompanyUseCase";



class GetCompanyController {
    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params

            const getCompanyUseCase = container.resolve(GetCompanyUseCase) 

            const company = await getCompanyUseCase.execute(id)

            return response.json(company)
        } catch (error) {
            response.json({error: error.message})
        }
    }
}

export { GetCompanyController }