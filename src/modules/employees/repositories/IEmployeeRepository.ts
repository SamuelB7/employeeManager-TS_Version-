import { ICreateEmployeeDTO } from "../dtos/ICreateEmployeeDTO";
import { IUpdateEmployeeDTO } from "../dtos/IUpdateEmployeeDTO";


interface IEmployeeRepository {
    create(data: ICreateEmployeeDTO): Promise<void>
    update(data: IUpdateEmployeeDTO): Promise<void>
}

export { IEmployeeRepository }