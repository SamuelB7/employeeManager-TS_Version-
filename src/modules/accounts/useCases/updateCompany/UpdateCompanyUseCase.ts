import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";
import { hash } from 'bcryptjs'

@injectable()
class UpdateCompanyUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ){}

    async execute ({id, name, cnpj, email, password}): Promise<void> {

        const passwordHash = await hash(password, 7)

        await this.companyRepository.update({id, name, cnpj, email, password: passwordHash})
    }
}

export { UpdateCompanyUseCase }