import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';

import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: parseInt(process.env.PG_PORT || '5432', 10),
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: ['**/*.entity{.ts,.js}'],
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      synchronize: true, // on production disable this,
      logging: true,
      logger: 'advanced-console',
      cli: {
        migrationsDir: 'src/migration',
      },
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class CoreModule {}
