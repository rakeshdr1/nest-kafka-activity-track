import { NestFactory } from '@nestjs/core';
import { ActivityServiceModule } from './activity-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ActivityServiceModule);
  await app.listen(3000);
}
bootstrap();
