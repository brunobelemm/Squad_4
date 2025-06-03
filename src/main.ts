import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TraceIdMiddleware } from './middleware/trace-id.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new TraceIdMiddleware().use);
  await app.listen(3000);
}
bootstrap();