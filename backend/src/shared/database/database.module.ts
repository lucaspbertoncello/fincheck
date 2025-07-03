import { Global, Module } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.service";
import { UsersRepository } from "src/shared/database/repositories/users.repositories";
import { CategoriesRepository } from "./repositories/categories.repositories";

@Global()
@Module({
  providers: [UsersRepository, PrismaService, CategoriesRepository],
  exports: [UsersRepository, CategoriesRepository],
})
export class DatabaseModule {}
