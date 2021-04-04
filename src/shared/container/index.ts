import { container } from 'tsyringe'

import { ICompanyRepository } from '../../modules/accounts/repositories/ICompanyRepository'
import { CompanyRepository } from '../../modules/accounts/repositories/implementations/CompanyRepository'
import { IEmployeeRepository } from '../../modules/employees/repositories/IEmployeeRepository'
import { EmployeeRepository } from '../../modules/employees/repositories/implementations/EmployeeRepository'

container.registerSingleton<ICompanyRepository>(
    "CompanyRepository",
    CompanyRepository
)

container.registerSingleton<IEmployeeRepository>(
    "EmployeeRepository",
    EmployeeRepository
)