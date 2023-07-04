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

  @MessagePattern(CanchaMsg.VALID_CANCHA)
  async validateCancha(@Payload() payload) {
    const descripcion = await this.canchaService.findByDescripcion(payload.descripcion);

    const isValidPassword = await this.canchaService.checkPassword(
      payload.password,
      descripcion.password,
    );

    if (descripcion && isValidPassword) return descripcion;

    return null;
  }
}
