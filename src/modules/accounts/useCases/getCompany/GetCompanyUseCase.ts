import { inject, injectable } from "tsyringe";
import { Company } from "../../entities/Company";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";


@injectable()
class GetCompanyUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ) {}

    async execute(id): Promise<Company> {
        const company = await this.companyRepository.findById(id)
        if(!company) {
            throw new Error("Company not found!")
        }

        return company
    }
}

export { GetCompanyUseCase }