import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { env } from './config/env';

async function bootstrap() {  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.NATS,
    options: {
      urls: env.NATS_SERVERS,
    },
  });
  
  await app.listen();
}
bootstrap();
