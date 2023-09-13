import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/cutomer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('/')
  getAll() {
    return this.customerService.all();
  }

  @Post('/')
  create(@Body() body: CustomerDto) {
    return this.customerService.create(body);
  }

  @Get('/:id')
  find(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.find(id);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.delete(id);
  }

  @Patch('/:id')
  update(@Body() body: CustomerDto, @Param('id', ParseIntPipe) id: number) {
    return this.customerService.update(id, body);
  }
}
