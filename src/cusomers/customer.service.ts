import { Injectable } from '@nestjs/common';
import { CustomerDto } from './dto/cutomer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  /**
   * Retrieve all non-deleted customers from the database.
   *
   * @returns {Promise<Customer[]>} A promise that resolves to an array of Customer objects.
   *
   * @author Muhammad Imran Israr <imran.muhammad@camp1.tkxel.com>
   */
  all(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  /**
   * Find a customer by their ID.
   *
   * @param {number} id - The ID of the customer to find.
   * @returns {Promise<Customer | undefined>} A promise that resolves to the found customer or undefined if not found.
   *
   * @author Muhammad Imran Israr <imran.muhammad@camp1.tkxel.com>
   */
  find(id: number): Promise<Customer> {
    return this.customerRepository.findOneBy({ id });
  }

  /**
   * Create a new customer.
   *
   * @param {CustomerDto} body - The data for creating the customer.
   * @returns {Promise<Customer>} A promise that resolves to the created customer.
   *
   * @author Muhammad Imran Israr <imran.muhammad@camp1.tkxel.com>
   */
  create(body: CustomerDto): Promise<Customer> {
    return this.customerRepository.save(body);
  }

  /**
   * Deletes a customer by setting the 'deleted_at' field to the current date.
   *
   * @param {number} id - The ID of the customer to delete.
   * @returns {boolean} Returns `true` if the customer was successfully deleted, `false` otherwise.
   *
   * @author Muhammad Imran Israr <imran.muhammad@camp1.tkxel.com>
   */
  delete(id): boolean {
    try {
      this.customerRepository.delete(id);

      return true;
    } catch (error) {
      // add any logger to log error
      console.log('=== CUSTOMER_DELETE_ERR', error);
    }
  }

  /**
   * Updates a customer's data in the database.
   *
   * @param {number} id - The ID of the customer to update.
   * @param {Object} body - The new data to update for the customer.
   * @returns {boolean} - True if the update was successful, false otherwise.
   *
   * @author Muhammad Imran Israr <imran.muhammad@camp1.tkxel.com>
   */
  update(id, body): boolean {
    try {
      this.customerRepository.update({ id }, { ...body });

      return true;
    } catch (error) {
      // add any logger to log error
      console.log('=== CUSTOMER_UPDATE_ERR', error);
    }
  }
}
