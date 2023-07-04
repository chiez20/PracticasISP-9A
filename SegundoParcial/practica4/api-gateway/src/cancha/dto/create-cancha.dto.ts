import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CanchaDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    descripcion:string;

   

}
