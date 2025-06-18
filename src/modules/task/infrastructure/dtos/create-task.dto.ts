import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class createTaskDTO {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsBoolean()
    @IsNotEmpty()
    completed: boolean
}