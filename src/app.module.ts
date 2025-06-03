import { Module } from '@nestjs/common';
import { AppLogger } from './logger/logger.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AppLogger],
  exports: [AppLogger],
})
export class AppModule {}