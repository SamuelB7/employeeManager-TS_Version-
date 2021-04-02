import { compare } from "bcryptjs";
import { inject, injectable, singleton } from "tsyringe";
import { sign } from 'jsonwebtoken'
import { ICompanyRepository } from "../../repositories/ICompanyRepository";


interface IRequest {
    email: string
    password: string
}

interface IResponse {
    company: {
        id: string
        name: string
        email: string
    },
    token: string
}


@injectable()
class SessionUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
    ) {}

    async execute({email, password}: IRequest): Promise<IResponse> {
        const company = await this.companyRepository.findByEmail(email)
        if(!company) {
            throw new Error("Email or password incorrect!")
        }

        const passwordMatch = await compare(password, company.password)
        if(!passwordMatch) {
            throw new Error("Email or password incorrect!")
        }

        const token = sign({}, "81dc9bdb52d04dc20036dbd8313ed055", {
            subject: company.id,
            expiresIn: '1d'
        })

        const tokenReturn: IResponse = {
            token,
            company: {
                id: company.id,
                name: company.name,
                email: company.email
            }
        }

        return tokenReturn
    }
}

export { SessionUseCase }