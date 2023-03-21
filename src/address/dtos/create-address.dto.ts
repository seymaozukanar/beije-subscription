
import { IsNumber, IsString, MaxLength, IsNotEmpty } from 'class-validator';

export class createAddressDTO{
    
    @IsString()
    @MaxLength(155)
    @IsNotEmpty()
    address: string;

    @IsNumber({ allowNaN: false })
    zipCode: number;

    @IsString() 
    @MaxLength(55)  
    @IsNotEmpty()
    city: string;

    @IsString()
    @MaxLength(55)
    @IsNotEmpty()
    country: string;
}
