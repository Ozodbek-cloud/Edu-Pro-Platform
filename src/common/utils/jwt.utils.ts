import { JwtSignOptions } from "@nestjs/jwt";

export const JwtAccessToken: JwtSignOptions = {
   secret: 'birnama',
   expiresIn: '1h'
} 

export const JWtRefreshToken: JwtSignOptions = {
    secret: 'HllW@o)',
    expiresIn: '1h'
}