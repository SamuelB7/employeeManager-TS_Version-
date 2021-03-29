import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO'
import { Company } from '../entities/Company'

interface ICompanyRepository {
    create(data: ICreateCompanyDTO): Promise<void>
    findByEmail(email: string): Promise<Company>
    findById(id: string): Promise<Company>
}

export { ICompanyRepository }