import { CanchaDTO } from './dto/create-cancha.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CANCHA } from 'src/common/models/models';
import { ICancha } from 'src/common/interfaces/cancha.interface';

@Injectable()
export class CanchaService {
  constructor(@InjectModel(CANCHA.name) private readonly model: Model<ICancha>) {}

  
  async create(canchaDTO: CanchaDTO): Promise<ICancha> {
    const newCancha = new this.model(canchaDTO);
    return await newCancha.save();
  }

  async findAll(): Promise<ICancha[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ICancha> {
    return await this.model.findById(id);
  }

  async update(id: string, canchaDTO: CanchaDTO): Promise<ICancha> {
    return await this.model.findByIdAndUpdate(id, canchaDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
