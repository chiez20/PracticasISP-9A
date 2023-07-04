import { Module } from '@nestjs/common';
import { CanchaService } from './cancha.service';
import { CanchaSchema } from './schema/cancha.schema';
import { CANCHA } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { CanchaController } from './cancha.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CANCHA.name,
        useFactory: () => CanchaSchema,
      },
    ]),
  ],
  controllers: [CanchaController],
  providers: [CanchaService]
})
export class CanchaModule {}
