import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {

    try {
      console.log("ESTIC AL REGISTRE")
      const usuari = await this.authService.register(createUserDto);
      console.log('Usuari registrat correctament');
      return {
        statusCode: 201,
        message: 'Usuari registrat correctament',
        usuari
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto ) {
    const user = await this.authService.validateUser(loginDto);
    if (!user) {
      throw new HttpException('Credencials incorrectes', HttpStatus.UNAUTHORIZED);
    }
    return this.authService.login(user);
  }

  @UseGuards( AuthGuard )
  @Get()
  findAll(@Request() req: Request ) {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
