import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";

import { AuthenticateDto } from "./dto/authenticate.dto";
import { CreateUserDto } from "./dto/create-user.dto";

import { UsersRepository } from "src/shared/database/repositories/users.repositories";

import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async authenticate(authDto: AuthenticateDto) {
    const { email, password } = authDto;

    const user = await this.usersRepo.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException("Invalid e-mail");
    }

    const hashedPassword = await compare(password, user.password);

    if (!hashedPassword) {
      throw new UnauthorizedException("Invalid password");
    }

    const acessToken = await this.jwtService.signAsync({ sub: user.id });

    return { acessToken };
  }

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const emailExists = await this.usersRepo.findUnique({ where: { email } });

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
