import { inject, injectable } from "tsyringe";
import { ICreateEmployeeDTO } from "../../dtos/ICreateEmployeeDTO";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";


@injectable()
class CreateEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private employeeRepository: IEmployeeRepository
    ) {}

    async execute({name, rg, cpf, phone, email, birth, photo, company_id}: ICreateEmployeeDTO): Promise<void> {
        await this.employeeRepository.create({name, rg, cpf, phone, email, birth, photo, company_id})
    }
}

export { CreateEmployeeUseCase }