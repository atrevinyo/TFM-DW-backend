import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtService, private authService: AuthService) {}


  async canActivate( context: ExecutionContext ):  Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    // const token = request.headers['authorization'];
    const token = this.extractTokenFromHeader(request);

    console.log("AQUESTS ÉS EL TOKEN: ", token)
    // console.log(request)

    if (!token) {
      throw new UnauthorizedException('No hi ha bearer token');
    }

    try {
      const payload = await this.jwtService.verify(
        token, { secret: process.env.JWT_SEED }
      );

      // const payload = await this.jwtService.verify(token);

      console.log("PAYLOAD: ", payload)

      const user = await this.authService.findUserById( payload.sub );
      if ( !user ) throw new UnauthorizedException("L'usuari no existeix");

      console.log("ESIC AL GUARD: ", user)

      request['user'] = user;


      console.log("ESIC SORTINT dDEL  GUARD: ")
      // return true;
      return Promise.resolve(true)


    } catch (error) {
      console.error('Error al verificar el token:', error.message);
      throw new UnauthorizedException();
    }


  }


  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
