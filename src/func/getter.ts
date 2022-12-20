import { atob, btoa } from "../utils/b64";
import { Header, Payload } from "../interfaces/funcs";
import { Get } from "../utils/hash";

export function GetUUID(token: string, secret: string){
    try {
        if(!token) return false

        return Get(token, secret, "uuid", "header")
    } catch (error) {
        return "invalid-token"
    }
}

export function GetDetails(token: string, secret: string, key: string){
        try{
        if(!token) return false
        return Get(token, secret, key, "details")
    }catch(err){
        console.log(err);
        return "invalid-token"
    }
}

export function GetUser(token: string, secret: string){
    try {
        if(!token) return false

        return Get(token, secret, "username", "pl")
    } catch (error) {
        return "invalid-token"
    }
}