import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCompanyUseCase } from "./ListCompanyUseCase";

class ListCompanyController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listCompanyUseCase = container.resolve(ListCompanyUseCase)

            const companies = await listCompanyUseCase.execute()

            return response.json(companies)
        } catch (error) {
            console.error(error);
        }
    }
}

export { ListCompanyController }