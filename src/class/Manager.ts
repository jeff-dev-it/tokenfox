import ConvertToMs from "../func/convMs";
import { GetUser, GetDetails, GetUUID} from "../func/getter";
import { AtParam, date_expires_type } from "../interfaces/funcs";
import { Manager } from "../interfaces/Manager";
import { decodeToken, encodeToken, Get } from "../utils/hash";


export default class ManagerToken {
    #token: string = "";
    #secure: string = ""

    constructor(token: string, secure: string) {
        this.tk = token;
        this.sec = secure;
    }

    
    private set tk(v : string) {
        this.#token = v;
    }
    
    private set sec(v : string) {
        this.#secure = v;
    }
    
    
    GetUsername(): string {
        return GetUser(this.#token, this.#secure)
    }

    GetInfo(key: string): string {
        return GetDetails(this.#token, this.#secure, key)
    }


    GetUUID(): string {
        return GetUUID(this.#token, this.#secure)
    }

    Get(key: string, from?: AtParam): string {
        return Get(this.#token, this.#secure, key, from)
    }

    SetInfo(value: object){
        const decoded = decodeToken(this.#token, this.#secure);
        if(decoded){
            const [payload, header, secret]: any = decoded;

            payload.detail = {
                ...payload.detail,
                ...value
            }

            const newToken = encodeToken(payload, header, secret);

            return newToken
            
        }else{
            console.log("The token is invalid!");
        }
    }


    SetUsername(value: string){
        const decoded = decodeToken(this.#token, this.#secure);
        if(decoded){
            const [payload, header, secret]: any = decoded;

            payload.username = value

            const newToken = encodeToken(payload, header, secret);

            return newToken
            
        }else{
            console.log("The token is invalid!");
        }
    }
    
    
    SetOrigin(value: string){
        const decoded = decodeToken(this.#token, this.#secure);
        if(decoded){
            const [payload, header, secret]: any = decoded;

            header.origin = value

            const newToken = encodeToken(payload, header, secret);

            return newToken
            
        }else{
            console.log("The token is invalid!");
        }
    }
    
      
    ExpiresAdd(add: number, type?: date_expires_type){
        const decoded = decodeToken(this.#token, this.#secure);
        if(decoded){
            const [payload, header, secret]: any = decoded;

            header.date_expires = header.date_expires + ConvertToMs(add || 30, type || "min")

            const newToken = encodeToken(payload, header, secret);

            return newToken
            
        }else{
            console.log("The token is invalid!");
        }
    }
 
    Refresh(v: string | undefined){
        if(v) this.tk = v
    }
}