import { createParamDecorator, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";

interface ReqParams extends Request {
  userId: string;
}

export const ActiveUserId = createParamDecorator<string>((data: unknown, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<ReqParams>();
  const userId = request.userId;

  if (!userId) {
    throw new UnauthorizedException("User not found");
  }

  return userId;
});
