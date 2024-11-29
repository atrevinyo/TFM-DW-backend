import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, nom } = createUserDto;

    // Comprova si l'usuari ja existeix
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      console.log("L'usuari ja existeix");
      throw new HttpException({
        status: HttpStatus.CONFLICT,
        message: 'El correu ja està registrat'
      }, HttpStatus.CONFLICT);
    }

    // Encripta la contrasenya abans de desar-la
    const hashedPassword = await bcryptjs.hash(password, 10);

    const nouUsuari = new this.userModel({
      nom,
      email,
      password: hashedPassword,
    });

    return nouUsuari.save();
  }

  async validateUser(loginDto: LoginDto): Promise<User | null> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email }).lean();
    if (user && (await bcryptjs.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user._id };
    const { password: _, ...rest } = user; //Eliminem el password de la petició
    return {
      user: rest,
      access_token: this.jwtService.sign(payload),
    };
  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
    // return `This action returns all auth`;
  }

  async findUserById(id: string) {
    console.log("AQUESTS ÉS EL ID USER: ", id)

    const user = await this.userModel.findById(id);
    const { password, ...rest } = user.toJSON(); //Treiem el password
    return rest;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
