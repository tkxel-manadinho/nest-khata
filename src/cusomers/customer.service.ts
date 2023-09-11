import { Injectable } from '@nestjs/common';
import {Request} from 'express'

@Injectable()
export class CustomerService {
    all() {
        return "all customers listing";
    }

    create(req: Request) {
        return req.body;
    }

    delete(id) {
        return id
    }

    update(id, body) {
        return {id, body}
    }
}