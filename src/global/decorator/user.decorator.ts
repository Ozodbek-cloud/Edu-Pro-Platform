import { applyDecorators, createParamDecorator, ExecutionContext, SetMetadata, UseGuards } from '@nestjs/common';
import { UserRole } from '../types/user.types';
import { RolesGuard } from '../guards/roles.guard';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';

export function Auth(...roles: UserRole[]) {
  return applyDecorators(                        
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RolesGuard),
  );
}