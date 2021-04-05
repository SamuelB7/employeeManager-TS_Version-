import { getRepository, Repository } from "typeorm";
import { ICreateEmployeeDTO } from "../../dtos/ICreateEmployeeDTO";
import { IUpdateEmployeeDTO } from "../../dtos/IUpdateEmployeeDTO";
import { Employee } from "../../entities/Employee";
import { IEmployeeRepository } from "../IEmployeeRepository";


class EmployeeRepository implements IEmployeeRepository {
    private repository: Repository<Employee>

    constructor() {
        this.repository = getRepository(Employee)
    }

    async create({name, rg, cpf, phone, email, birth, photo, company_id}: ICreateEmployeeDTO): Promise<void> {
        const company = await this.repository.create({name, rg, cpf, phone, email, birth, photo, company_id})

        await this.repository.save(company)
    }

    async update({id, name, rg ,cpf, phone, email, birth, photo}: IUpdateEmployeeDTO): Promise<void> {
        await this.repository.update(id, {name, rg, cpf, phone, email, birth, photo})
    }
}

export { EmployeeRepository }