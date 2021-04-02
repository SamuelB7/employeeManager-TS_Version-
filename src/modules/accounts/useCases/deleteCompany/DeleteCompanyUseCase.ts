import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from '../../repositories/ICompanyRepository'

@injectable()
class DeleteCompanyUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ){}

    async execute(id: string): Promise<void> {
        await this.companyRepository.delete(id)
    }
}

export { DeleteCompanyUseCase }