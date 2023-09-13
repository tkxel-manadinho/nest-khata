import { Injectable } from '@nestjs/common';
import { CustomerDto } from './dto/cutomer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { Repository } from 'typeorm';
import { ApiResponse } from 'src/response.dto';

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
  async all(): Promise<ApiResponse<Array<any>>> {
    const data = await this.customerRepository.find();

    const response: ApiResponse<Array<any>> = {
      success: true,
      message: 'success',
      data,
    };

    return response;
  }

  /**
   * Find a customer by their ID.
   *
   * @param {number} id - The ID of the customer to find.
   * @returns {Promise<Customer | undefined>} A promise that resolves to the found customer or undefined if not found.
   *
   * @author Muhammad Imran Israr <imran.muhammad@camp1.tkxel.com>
   */
  async find(id: number): Promise<ApiResponse<Customer>> {
    const data = await this.customerRepository.findOneBy({ id });

    const response: ApiResponse<Customer> = {
      success: true,
      message: 'success',
      data,
    };

    return response;
  }

  /**
   * Create a new customer.
   *
   * @param {CustomerDto} body - The data for creating the customer.
   * @returns {Promise<Customer>} A promise that resolves to the created customer.
   *
   * @author Muhammad Imran Israr <imran.muhammad@camp1.tkxel.com>
   */
  async create(body: CustomerDto): Promise<ApiResponse<null>> {
    try {
      await this.customerRepository.save(body);
      const response: ApiResponse<null> = {
        success: true,
        message: 'User created',
        data: null,
      };

      return response;
    } catch (error) {
      // add any logger to log error
      console.log('=== CUSTOMER_CREATE_ERR', error);

      const response: ApiResponse<null> = {
        success: false,
        message: error.message,
        data: null,
      };

      return response;
    }
  }

  /**
   * Deletes a customer by setting the 'deleted_at' field to the current date.
   *
   * @param {number} id - The ID of the customer to delete.
   * @returns {boolean} Returns `true` if the customer was successfully deleted, `false` otherwise.
   *
   * @author Muhammad Imran Israr <imran.muhammad@camp1.tkxel.com>
   */
  async delete(id): Promise<ApiResponse<null>> {
    try {
      await this.customerRepository.delete(id);

      const response: ApiResponse<null> = {
        success: true,
        message: 'User deleted',
        data: null,
      };

      return response;
    } catch (error) {
      // add any logger to log error
      console.log('=== CUSTOMER_DELETE_ERR', error);

      const response: ApiResponse<null> = {
        success: true,
        message: error.message,
        data: null,
      };

      return response;
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
  async update(id, body): Promise<ApiResponse<null>> {
    try {
      await this.customerRepository.update({ id }, { ...body });

      const response: ApiResponse<null> = {
        success: true,
        message: 'User updated',
        data: null,
      };

      return response;
    } catch (error) {
      // add any logger to log error
      console.log('=== CUSTOMER_UPDATE_ERR', error);

      const response: ApiResponse<null> = {
        success: true,
        message: error.message,
        data: null,
      };

      return response;
    }
  }
}
