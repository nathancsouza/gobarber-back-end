import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AlterProviderField1586996762390
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropColumn('appointments', 'provider');

    // await queryRunner.addColumn(
    //   'appointments',
    //   new TableColumn({
    //     name: 'provide_id',
    //     type: 'uuid',
    //     isNullable: true,
    //   })
    // );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'AppointmentProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');

    // await queryRunner.dropColumn('appointments', 'provide_id');

    // await queryRunner.addColumn(
    //   'appointments',
    //   new TableColumn({
    //     name: 'provider',
    //     type: 'varchar',
    //   })
    // );
  }
}
