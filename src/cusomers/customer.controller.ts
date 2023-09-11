import { Controller, Get, Post, Req, Param, Delete, Patch } from '@nestjs/common';
import {Request} from 'express'
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

    @Get('/')
    getAll() {
        return this.customerService.all();
    }
    
    @Post('/')
    create(@Req() req: Request) {
        return this.customerService.create(req)
    }

    @Delete('/:id')
    delete(@Param() param: any) {
        return this.customerService.delete(param.id)
    }

    @Patch('/:id')
    update(@Req() req: Request, @Param() param: any) {
        return this.customerService.update(param.id, req.body)
    }
}