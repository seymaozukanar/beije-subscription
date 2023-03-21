import { Controller, Put, Param, Post, Body } from '@nestjs/common';
import { AddressService } from './address.service';
import { createAddressDTO } from './dtos/create-address.dto';

@Controller('addresses/')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post('/create')
  async createAddress(@Body() createAddressDTO: createAddressDTO) {
    const newAddress = await this.addressService.createAddress(createAddressDTO)
  }

  @Put(':id')
  async updateAddress(@Param('id') id:number, @Body() createAddressDTO:createAddressDTO) {
    const updatedAddress = await this.addressService.updateAddress(id, createAddressDTO);
    return updatedAddress;
  }
}
