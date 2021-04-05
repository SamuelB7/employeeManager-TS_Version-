import { inject, injectable } from "tsyringe";
import { IUpdateEmployeeDTO } from "../../dtos/IUpdateEmployeeDTO";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
class UpdateEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private employeeRepository: IEmployeeRepository
    ) {}

    async execute({id, name, rg, cpf, phone, email, birth, photo}: IUpdateEmployeeDTO): Promise<void> {
        await this.employeeRepository.update({id, name, rg, cpf, phone, email, birth, photo})
    }
}

export { UpdateEmployeeUseCase }
