import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRequestTypeTable1702408218227 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'request_type',
      columns: [{
          name: "id",
          type: "int",
          isPrimary: true,
      },
      {
          name: "name",
          type: "varchar",
      },]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('request_type')
  }
}
