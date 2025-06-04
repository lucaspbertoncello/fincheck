import { Module } from "@nestjs/common";

import { UsersModule } from "./modules/entities/users/users.module";
import { DatabaseModule } from "./shared/database/database.module";

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
