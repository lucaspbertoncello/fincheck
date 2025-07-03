import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "src/shared/database/repositories/categories.repositories";

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  async findAllByUserId(userId: string) {
    const categories = await this.categoriesRepo.findMany({
      where: { userId },
    });

    return categories;
  }
}
