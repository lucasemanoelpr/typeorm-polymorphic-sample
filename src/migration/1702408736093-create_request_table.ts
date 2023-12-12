import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRequestTable1702408736093 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'requests',
        columns: [{
            name: "id",
            type: "int",
            isPrimary: true,
        },
        {
            name: "name",
            type: "varchar",
        },
        {
          name: 'entity_id',
          type: 'int'
        },
        {
          name: 'entity_type',
          type: 'varchar'
        },
        ]
      }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
