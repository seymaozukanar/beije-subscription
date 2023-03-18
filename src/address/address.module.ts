import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressSchema } from './schemas/address.schema';


@Module({
  imports: [TypeOrmModule.forFeature([AddressSchema])],
  providers: [AddressService],
  controllers: [AddressController]
})
export class AddressModule {}
