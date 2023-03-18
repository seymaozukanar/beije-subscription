import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { createAddressDTO } from './dtos/create-address.dto';


@Injectable()
export class AddressService {

    constructor(
        @InjectRepository(Address)
        private addressRepository: Repository<Address>,
      ){}

    async getAddresses(){
        const addresses = await this.addressRepository.find();
        return addresses;
    }

    async getAddress(id: number){
        const address = await this.addressRepository.findOneBy({id:id});
        return address;
    }

    async createAddress(createAddressDTO: createAddressDTO){
        const newAddress = await this.addressRepository.create(createAddressDTO);
        return newAddress;
    }

    async deleteAddress(id: number){
        const deletedAddress = this.addressRepository.delete({id:id});
        return deletedAddress;
    }
}
