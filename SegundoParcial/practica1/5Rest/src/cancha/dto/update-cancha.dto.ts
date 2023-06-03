import { PartialType } from '@nestjs/mapped-types';
import { CreateCanchaDto } from './create-cancha.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';


export class UpdateCanchaDto extends PartialType(CreateCanchaDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;

}
