import { IsOptional, IsString, MaxLength, MinLength, IsEmail, IsBoolean } from 'class-validator';

export class createUserDTO {

  @IsBoolean()
  isActive: boolean = true;

  @IsString()
  @MaxLength(55)
  @MinLength(5)
  username: string;

  @IsOptional()
  @IsString()
  @MaxLength(55)
  @MinLength(2)
  firstName: string;

  @IsOptional()
  @IsString()
  @MaxLength(55)
  @MinLength(2)
  lastName: string;

  @IsString()
  @MaxLength(55)
  email: string;

  @IsEmail()
  @MaxLength(55)
  @MinLength(10)
  password: string;
}
