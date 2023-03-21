import { IsOptional, IsString, MaxLength } from 'class-validator';

export class createUserDTO {

    @IsString()
    @MaxLength(55)
    username: string;

    @IsOptional()
    @IsString()
    @MaxLength(55)
    firstName: string;

    @IsOptional()
    @IsString()
    @MaxLength(55)
    lastName: string;

    @IsString()
    @MaxLength(55)
    email: string;

    @IsString()
    @MaxLength(55)
    password: string;
}
