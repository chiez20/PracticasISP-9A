import { Module } from '@nestjs/common';
import { CanchaController } from './cancha.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [CanchaController],
})
export class CanchaModule {}
