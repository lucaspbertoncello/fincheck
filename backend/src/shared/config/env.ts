import { plainToInstance } from "class-transformer";
import { IsNotEmpty, IsString, NotEquals, validateSync } from "class-validator";

class Env {
  @IsString()
  @IsNotEmpty()
  @NotEquals("unsecure_jwt_secret")
  jwtSecret: string;

  @IsString()
  @IsNotEmpty()
  databaseUrl: string;
}

export const env: Env = plainToInstance(Env, {
  jwtSecret: process.env.JWT_SECRET,
  databaseUrl: process.env.DATABASE_URL,
});

const errors = validateSync(env);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 3));
}
