import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddCompanyIdFK1617409333447 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("employee", new TableForeignKey({
            columnNames: ["company_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "company",
            onDelete: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
