import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO'
import { Company } from '../entities/Company'

interface ICompanyRepository {
    create(data: ICreateCompanyDTO): Promise<void>
}

export { ICompanyRepository }