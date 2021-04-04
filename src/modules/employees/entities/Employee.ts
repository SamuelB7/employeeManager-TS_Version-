import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid'
import { Company } from '../../accounts/entities/Company';

@Entity("employee")
class Employee {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    rg: string

    @Column()
    cpf: string

    @Column()
    phone: string

    @Column()
    email: string

    @CreateDateColumn()
    birth: Date

    @Column()
    photo: string

    @Column()
    company_id: string

    @CreateDateColumn()
    created_at: Date

    /* @ManyToOne(() => Company, company => company.id)
    company: Company */

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Employee }
