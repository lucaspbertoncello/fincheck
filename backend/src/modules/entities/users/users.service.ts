import { ConflictException, Injectable } from "@nestjs/common";

import { UsersRepository } from "src/shared/database/repositories/users.repositories";
import { CreateUserDto } from "./dto/create-user.dto";

import { hash } from "bcryptjs";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const emailExists = await this.usersRepo.findUnique({
      where: { email },
    });

    if (emailExists) {
      throw new ConflictException("This e-mail is already in use");
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.usersRepo.create({
      data: {
        name,
        email,
        password: hashedPassword,
        categories: {
          createMany: {
            data: [
              { name: "Salário", icon: "travel", type: "INCOME" },
              { name: "Freelancer", icon: "freelance", type: "INCOME" },
              { name: "Mesada", icon: "ether", type: "INCOME" },
              { name: "Alimentação", icon: "food", type: "EXPENSE" },
              { name: "Lazer", icon: "fun", type: "EXPENSE" },
              { name: "Roupas", icon: "clothes", type: "EXPENSE" },
              { name: "Transporte", icon: "transport", type: "EXPENSE" },
            ],
          },
        },
      },
    });

    return user;
  }
}
