import { User } from "../../user/user.entity"


export class createSubscriptionDTO{
    numberOfUnits: number;
    frequency: number;
    user: User;
}
