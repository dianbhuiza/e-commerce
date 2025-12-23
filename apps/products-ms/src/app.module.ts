import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import z from 'zod';
import { envSchema } from './config/env';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
      validate: (config) => {
        const parsed = envSchema.safeParse(config);
        if (!parsed.success) {
          console.error(parsed.error.message[0]);
          throw new Error('Invalid configuration');
        }
        return parsed.data;
      },
    }),
    ProductsModule
  ],
})
export class AppModule {}
