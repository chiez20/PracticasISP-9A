import { Injectable , NotFoundException} from '@nestjs/common';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';
import { Cancha } from './entities/cancha.entity';


@Injectable()
export class CanchaService {
  private canchas: Cancha[]=[
    {id:1, descripcion:'Cancha grande' ,estado:true},
    {id:2, descripcion:'Cancha sintética mediana' , estado:true},
  ]

  create(createcanchaDto: CreateCanchaDto) {
    const cancha = new Cancha();
    cancha.id=  Math.max( ... this.canchas.map(elemento => elemento.id),0 )+1 ;
    cancha.descripcion= createcanchaDto.descripcion;
    this.canchas.push(cancha);
    return cancha;
  }

  findAll() : Cancha[] {
    return this.canchas;
  }

  findOne(id: number) {
    const cancha =  this.canchas.find(cancha=> cancha.id===id);
    if (!cancha) throw new NotFoundException(`ID ${id} not found`)
    return cancha;
  }

  update(id: number, updatecanchaDto: UpdateCanchaDto) {
    const { descripcion, estado   } = updatecanchaDto;
    const cancha = this.findOne(id);
    if (descripcion) cancha.descripcion= descripcion;
    if (estado!= undefined) cancha.estado= estado;

    this.canchas =  this.canchas.map( elemento=> {
      if (elemento.id===id) return cancha;
      return elemento;
    } )

    return cancha;

  }

  remove(id: number) {
    this.findOne(id);
    this.canchas =  this.canchas.filter(elemento=> elemento.id!== id);
  }
}
