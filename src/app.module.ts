import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [UserModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
