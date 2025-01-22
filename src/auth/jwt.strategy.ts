import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { MiembrosService } from "src/miembros/miembros.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(
    private readonly miembrosService: MiembrosService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    })
  }

  async validate(payload) {
    const { id } = payload;
    const user = await this.miembrosService.getById(id)
    if(!user) {
      throw new UnauthorizedException('Login first to access this endpoint.')
    }
    return user
  }
}