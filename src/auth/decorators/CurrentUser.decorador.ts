import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UsersPayload } from '../token/usersPayloads';

export const CurrentUser = createParamDecorator(
  (data: keyof UsersPayload | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return data ? request.user[data] : request.user;
  },
);
