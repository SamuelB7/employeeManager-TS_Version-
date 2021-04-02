import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCompanyUseCase } from "./DeleteCompanyUseCase";



class DeleteCompanyController {
    async handle(request: Request, response: Response): Promise<Response> {
       try {
        const { id } = request.body

        const deleteCompanyUseCase = container.resolve(DeleteCompanyUseCase)

        await deleteCompanyUseCase.execute(id)

        return response.status(200).json('Company Deleted!')
       } catch (error) {
           return response.json({error: error.message})
       }
    }
}

export { DeleteCompanyController }