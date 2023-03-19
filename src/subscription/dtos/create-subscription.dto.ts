import { User } from "src/user/user.entity"


export class createSubscriptionDTO{
    numberOfUnits: number;
    frequency: number;
    user: User;
}
