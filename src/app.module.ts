import { Module } from '@nestjs/common';
import { SearchModule } from './search/search.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SearchModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
