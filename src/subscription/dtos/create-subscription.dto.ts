import { IsBoolean, IsNumber } from 'class-validator';

export class createSubscriptionDTO {

  @IsNumber({ allowNaN: false })
  numberOfUnits: number;

  @IsNumber({ allowNaN: false })
  frequency: number;

  @IsBoolean()
  isActive: boolean = true;
}
