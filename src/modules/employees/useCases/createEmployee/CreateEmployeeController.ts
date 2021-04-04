import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";



class CreateEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {name, rg, cpf, phone, email, birth, photo} = request.body

            const company_id = request.company.id

            const createEmployeeUseCase = container.resolve(CreateEmployeeUseCase)

            await createEmployeeUseCase.execute({name, rg, cpf, phone, email, birth, photo, company_id})

            return response.status(201).send()
        } catch (error) {
            console.error(error)
        }
    }
}

export { CreateEmployeeController }