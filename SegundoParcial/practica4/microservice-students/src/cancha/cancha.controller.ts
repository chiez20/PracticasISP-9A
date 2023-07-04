import { CanchaService } from './cancha.service';
import { CanchaDTO } from './dto/create-cancha.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CanchaMsg } from 'src/common/constants';

@Controller()
export class CanchaController {
  constructor(private readonly canchaService: CanchaService) {}

  @MessagePattern(CanchaMsg.CREATE)
  create(@Payload() canchaDTO: CanchaDTO) {
    return this.canchaService.create(canchaDTO);
  }

  @MessagePattern(CanchaMsg.FIND_ALL)
  findAll() {
    return this.canchaService.findAll();
  }

  @MessagePattern(CanchaMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.canchaService.findOne(id);
  }
  @MessagePattern(CanchaMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.canchaService.update(payload.id, payload.canchaDTO);
  }

  @MessagePattern(CanchaMsg.DELETE)
  delete(@Payload() id: string) {
    return this.canchaService.delete(id);
  }
}
