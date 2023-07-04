import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CanchaMSG, StudentMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { CanchaDTO } from './dto/create-cancha.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { ICancha } from 'src/common/interfaces/cancha.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('canchas')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/cancha')
export class CanchaController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyCancha = this.clientProxy.clientProxyCanchas();

  @Post()
  create(@Body() canchaDTO: CanchaDTO): Observable<ICancha> {
    return this._clientProxyCancha.send(CanchaMSG.CREATE, canchaDTO);
  }

  @Get()
  findAll(): Observable<ICancha[]> {
    return this._clientProxyCancha.send(CanchaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ICancha> {
    return this._clientProxyCancha.send(CanchaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() canchaDTO: CanchaDTO): Observable<ICancha> {
    return this._clientProxyCancha.send(CanchaMSG.UPDATE, { id, canchaDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyCancha.send(CanchaMSG.DELETE, id);
  }
}
