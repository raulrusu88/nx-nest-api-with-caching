import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';

import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';

import { UserEntity } from '@nx-nest-api-with-caching/typeorm-entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: configService.get('pg_port'),
        username: configService.get('pg_username'),
        password: configService.get('pg_password'),
        database: configService.get('pg_database'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        migrationsTableName: 'migration',
        migrations: ['dist/migrations/*.{ts,js}'],
        synchronize: true, // on production disable this,
        logging: true,
        logger: 'advanced-console',
        cli: {
          migrationsDir: 'apps/api/src/migrations',
        },
      }),
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class CoreModule {}
