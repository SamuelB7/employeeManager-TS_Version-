import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid'

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

    @Column()
    birth: Date

    @Column()
    company_id: string

    @CreateDateColumn()
    created_at: Date
}

export { Employee }
