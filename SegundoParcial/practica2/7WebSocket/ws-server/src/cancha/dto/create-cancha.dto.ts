import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateCanchaDto {


    @IsString()
    @IsNotEmpty()
    descripcion:string;

   
}

