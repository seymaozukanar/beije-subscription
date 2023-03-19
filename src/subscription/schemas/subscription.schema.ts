import { EntitySchema } from 'typeorm';

export const subscriptionSchema = new EntitySchema({

    name: 'Subscription',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        creationDatetime: {
            type: Date,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    }
})
