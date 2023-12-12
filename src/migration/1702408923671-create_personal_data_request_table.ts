import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePersonalDataRequestTable1702408923671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'personal_data',
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
              name: "name",
              type: "varchar",
          }
        ]
      }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
