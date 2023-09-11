import { Controller, Get, Post, Req, Param, Delete, Patch, Body } from '@nestjs/common';
import {Request} from 'express'
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/cutomer.dto';

@Controller('customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

    @Get('/')
    getAll() {
        return this.customerService.all();
    }
    
    @Post('/')
    create(@Body() body: CustomerDto) {
        return this.customerService.create(body)
    }

    @Delete('/:id')
    delete(@Param() param: any) {
        return this.customerService.delete(param.id)
    }

    @Patch('/:id')
    update(@Body() body: CustomerDto, @Param() param: any) {
        return this.customerService.update(param.id, body)
    }
}