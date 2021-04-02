import { NextFunction, Request } from "express";
import { verify } from 'jsonwebtoken'
import { CompanyRepository } from "../modules/accounts/repositories/implementations/CompanyRepository";

interface ISub {
    sub: string
}


export async function isLogged (request: Request, response: Response, next: NextFunction){

    const authHeader = request.headers.authorization
    if(!authHeader) {
        throw new Error("Token Missing");
    }

    const [, token] = authHeader.split(' ')

    try {
        //Sub é como o id do usuário vem no token
        const{ sub: company_id } = verify(token, "81dc9bdb52d04dc20036dbd8313ed055") as ISub
        
        const companyRepository = new CompanyRepository()
        
        const company = await companyRepository.findById(company_id)
        if(!company) {
            throw new Error("Company not found")
        }

        request.company = {
            id: company_id
        }

        next()

    } catch (error) {
        throw new Error("Invalid token!");
    }
}
    
