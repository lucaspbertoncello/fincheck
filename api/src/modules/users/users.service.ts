import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { hash } from 'bcryptjs';
import { UsersRepository } from 'src/shared/database/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const emailExists = await this.usersRepository.findUnique({
      where: { email },
    });

    if (emailExists) {
      throw new ConflictException('This e-mail is already in use');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.usersRepository.create({
      data: {
        name,
        email,
        password: hashedPassword,
        categories: {
          createMany: {
            // INCOME
            data: [
              { name: 'Salário', icon: 'travel', type: 'INCOME' },
              { name: 'Freelancer', icon: 'freelance', type: 'INCOME' },
              { name: 'Mesada', icon: 'other', type: 'INCOME' },
              // EXPENSE
              { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
              { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
              { name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
              { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
              { name: 'Educação', icon: 'education', type: 'EXPENSE' },
            ],
          },
        },
      },
    });

    return user;
  }
}
