import { container } from 'tsyringe'

import { ICompanyRepository } from '../../modules/accounts/repositories/ICompanyRepository'
import { CompanyRepository } from '../../modules/accounts/repositories/implementations/CompanyRepository'

container.registerSingleton<ICompanyRepository>(
    "CompanyRepository",
    CompanyRepository
)