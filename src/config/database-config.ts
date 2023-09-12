import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Customer } from 'src/cusomers/entity/customer.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nest-khata',
  entities: [Customer],
  synchronize: true,
};
