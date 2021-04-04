import { ICreateEmployeeDTO } from "../dtos/ICreateEmployeeDTO";


interface IEmployeeRepository {
    create(data: ICreateEmployeeDTO): Promise<void>
}

export { IEmployeeRepository }