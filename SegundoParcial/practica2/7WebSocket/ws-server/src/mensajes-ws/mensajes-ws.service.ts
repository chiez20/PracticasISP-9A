import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Cancha } from '../cancha/entities/cancha.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CanchaService } from 'src/cancha/cancha.service';
//import { Cancha } from 'src/cancha/entities/cancha.entity';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       cancha: Cancha
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Cancha)
     private readonly canchaRepository: Repository<Cancha>,
     private readonly canchaService: CanchaService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.canchaService.prueba());
        const cancha =await  this.canchaRepository.findOneBy({ descripcion: name });
        if (!cancha) throw new Error('Cancha no encontrado');
        if (!cancha.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, cancha: cancha};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].cancha.descripcion;
    }
}
