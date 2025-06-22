import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get('role', context.getHandler());
    
    if (!roles) {
      return true;
    }
    
    const request = context.switchToHttp().getRequest();
    console.log(request.user)
    if(roles.includes(request.user.role)) {
      return true
    } else{
      throw new ForbiddenException(`Role: ${request.user.roles} has not permission! To ${request.method}`)
    }
  }
}
