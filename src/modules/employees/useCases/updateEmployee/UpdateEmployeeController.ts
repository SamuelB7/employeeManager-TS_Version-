import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEmployeeUseCase } from "./UpdateEmployeeUseCase";
import { deleteFile } from '../../../../utils/file'


class UpdateEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {id, name, rg, cpf, phone, email, birth} = request.body

            const updateEmployeeUseCase = container.resolve(UpdateEmployeeUseCase)

            if(request.file) {
                await deleteFile(`./employee_photos`)
                const photo = request.file.filename
                updateEmployeeUseCase.execute({photo})
            }

            updateEmployeeUseCase.execute({id, name, rg, cpf, phone, email, birth})

            return response.status(200).send()

        } catch (error) {
            console.error(error)
        }
    }
}

export { UpdateEmployeeController }