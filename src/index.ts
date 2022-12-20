import { GetKey, GetOccupation, GetUUID, GetUser } from "./func/getter"
import Sign from "./func/sign";
import IsValid, { ValidOrigin } from "./func/verify";

export default {
    Getter: {
        GetKey,
        GetOccupation, 
        GetUUID,
        GetUser
    },
    Sign,
    IsValid,
    ValidOrigin
}