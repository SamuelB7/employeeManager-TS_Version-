import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Employee } from '../../employees/entities/Employee'

@Entity('company')
class Company {

    @PrimaryColumn()
    id: string
    
    @Column()
    name: string
    
    @Column()
    cnpj: string

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

    /* @OneToMany(() => Employee, employee => employee.id)
    employees: Employee[] */

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Company }