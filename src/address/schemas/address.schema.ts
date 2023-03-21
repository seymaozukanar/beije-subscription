import { EntitySchema } from 'typeorm';

export const AddressSchema = new EntitySchema({
  name: 'Address',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    address: {
      type: String,
      nullable: false,
      length: 225,
    },
    city: {
      type: String,
      nullable: false,
      length: 30,
    },
    country: {
      type: String,
      nullable: false,
      length: 30,
    },
    zipCode: {
      type: Number,
    },
  },
});
