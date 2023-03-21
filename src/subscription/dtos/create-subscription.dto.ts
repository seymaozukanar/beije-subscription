import { IsBoolean, IsNumber } from 'class-validator';
import { createUserDTO } from 'src/user/dtos/create-user.dto';

export class createSubscriptionDTO {

  @IsNumber({ allowNaN: false })
  numberOfUnits: number;

  @IsNumber({ allowNaN: false })
  frequency: number;

  @IsBoolean()
  isActive: boolean = true;

  user: createUserDTO;
}
