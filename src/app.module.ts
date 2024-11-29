import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { AssignaturesModule } from './assignatures/assignatures.module';
import { JwtModule } from '@nestjs/jwt';
import { MateriaModule } from './materia/materia.module';
import { NotaModule } from './nota/nota.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    }),
    AssignaturesModule,
    MateriaModule,

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: { expiresIn: '4h' },
    }),

    MateriaModule,

    NotaModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {


}
