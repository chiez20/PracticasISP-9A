import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';
import { Cancha } from './entities/cancha.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CanchaService {
  
  private readonly logger = new Logger('CanchaService');

  constructor( 
    @InjectRepository(Cancha) 
    private readonly canchaRepository: Repository<Cancha>,

    ){}

  
  async create(createCanchaDto: CreateCanchaDto) {
    try {
      const cancha =  this.canchaRepository.create(createCanchaDto);
      await this.canchaRepository.save(cancha);
      return cancha;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.canchaRepository.find({});
  }

  async findOne(id: string) {
    const cancha= await  this.canchaRepository.findOneBy ({ id });
    if (!cancha)
      throw new NotFoundException(`cancha ${id} no encontrado`);
    return cancha;

  }

  async update(id: string, updateCanchaDto: UpdateCanchaDto) {
    const cancha = await this.canchaRepository.preload({
      id: id,
      ...updateCanchaDto
    });
    if (!cancha) throw new NotFoundException(`cancha ${id} no encontrado`)

    try {
      await  this.canchaRepository.save(cancha)
      return cancha;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const cancha = await this.findOne(id);
    await this.canchaRepository.remove(cancha);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
