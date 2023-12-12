import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateMedicalCertificateTable1702408848118 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'medical_certificate',
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
