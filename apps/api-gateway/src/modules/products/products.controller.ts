import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { NATS_CLIENT } from 'src/shared/const';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(@Inject(NATS_CLIENT) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  @Get()
  findAll() {
    return this.client.send('findAllProducts',{});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'This action returns a #' + id + ' product';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return 'This action updates a #' + id + ' product';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'This action removes a #' + id + ' product';
  }
}
