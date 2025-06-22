import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService : JwtService) {}

    async canActivate(context: ExecutionContext) : Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        let token = this.extractTokenFromHeader(request)
         console.log(4, token)
        if(!token) throw new UnauthorizedException()
        
        try{
            let payload = await this.jwtService.verifyAsync(token)
            console.log(5, payload)
            request['user'] = payload
            return true
           
        } catch(error) {
            console.error('JWT Error:', error.message);
             throw new UnauthorizedException()
        }

    }
    private extractTokenFromHeader(request: Request) : string | undefined {
        let [type, token] = request.headers.authorization?.split(" ") || []
        console.log(1, type, 2, token)
        return type == 'Bearer' ? token : undefined
    }
}