import { GetKey, GetUUID } from "../func/getter";
import Sign from "../func/sign";
import IsValid, { ValidOrigin } from "../func/verify";


const token = Sign({
    date_expires: 30,
    origin: "*"
}, {
    secret: "teste"
})


console.log(IsValid(token, "teste"));
