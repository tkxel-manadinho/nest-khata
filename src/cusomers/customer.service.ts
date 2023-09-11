import { Injectable } from '@nestjs/common';
import { CustomerDto } from './dto/cutomer.dto';

@Injectable()
export class CustomerService {
    all() {
        return "all customers listing";
    }

    create(body: CustomerDto) {
        return body;
    }

    delete(id) {
        return id
    }

    update(id, body) {
        return {id, body}
    }
}