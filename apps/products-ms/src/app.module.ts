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
      validationSchema: envSchema,
    }),
    ProductsModule
  ],
})
export class AppModule {}
