import { inject, injectable } from "tsyringe";
import { Company } from "../../entities/Company";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";


@injectable()
class ListCompanyUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ){}

    async execute(): Promise<Company[]> {
        const companies = await this.companyRepository.list()

        return companies
    }
}

export { ListCompanyUseCase }