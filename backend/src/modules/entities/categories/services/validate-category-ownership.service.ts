import { Injectable, NotFoundException } from "@nestjs/common";
import { CategoriesRepository } from "src/shared/database/repositories/categories.repositories";

@Injectable()
export class ValidateCategoryOwnershipService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  async validate(userId: string, categoryId: string | undefined): Promise<boolean | null> {
    if (!categoryId) {
      return null;
    }

    const isOwner = await this.categoriesRepo.findFirst({ where: { userId, id: categoryId } });

    if (!isOwner) {
      throw new NotFoundException("Category not found");
    }

    return true;
  }
}
