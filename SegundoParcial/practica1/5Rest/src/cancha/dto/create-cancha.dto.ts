import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCanchaDto {
    @IsString()
    @IsNotEmpty()
    descripcion:string;

}

