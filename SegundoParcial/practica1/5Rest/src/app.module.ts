import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { CanchaModule } from './cancha/cancha.module';

@Module({
  imports: [EstudianteModule, CanchaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
