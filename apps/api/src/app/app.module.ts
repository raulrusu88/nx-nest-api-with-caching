import { Module } from '@nestjs/common';
import { CoreModule } from '@nx-nest-api-with-caching/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [CoreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
