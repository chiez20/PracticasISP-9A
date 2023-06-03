import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CanchaModule } from './cancha/cancha.module';

@Module({
  imports: [EstudianteModule,
    CanchaModule,
    ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type:'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    autoLoadEntities: true,
    synchronize: true,
  }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
