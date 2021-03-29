import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { ICreateCompanyDTO } from "../../dtos/ICreateCompanyDTO";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";


@injectable()
class CreateCompanyUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ) {}

    async execute({name, cnpj, email, password}: ICreateCompanyDTO): Promise<void> {

        const companyAlreadyRegistered = await this.companyRepository.findByEmail(email)
        if(companyAlreadyRegistered) {
            throw new Error("Company already registered");
        }

        const passwordHash = await hash(password, 7)

        await this.companyRepository.create({
            name,
            cnpj,
            email,
            password: passwordHash
        })
    }
}

export { CreateCompanyUseCase }