import { AtParam, Header, Payload } from "../interfaces/funcs";
import { atob, btoa } from "./b64";

export function encodeToken(payload: Payload, header: Header, secret: string){
    const encode = new TextEncoder();
    const json = {
        header: JSON.stringify(header),
        pay: JSON.stringify(payload)
    }

    let secret_ = (btoa(encodeURIComponent(btoa(JSON.stringify(encode.encode(btoa(encodeURIComponent(secret))))))))
    

    return `${btoa(json.header)}.${btoa(json.pay)}.${secret_}`
}

export function decodeToken(token: string, secure: string){
    if(!token) return [null, null]
    const decode = new TextDecoder("utf-8") 
    const [header_encoded, payload_encoded, secret_encoded] = token.split(".")
    
    const [payload, header, secret]: [Payload, Header, string] = [
            JSON.parse(atob(payload_encoded)),
            JSON.parse(atob(header_encoded)), 
            atob(decodeURIComponent(decode.decode(new Uint8Array(Object.values(
                JSON.parse((atob(decodeURIComponent(atob(secret_encoded)))))
            )))))
        ]
    
    return secret === secure? [payload, header, secret]: "Unauthorized"
}


export function Get(token: string, secure: string, key: string, at: AtParam="*"){
    const decoded:any = decodeToken(token, secure);

    if(decoded){
        const [payload, header, secret]: any = decoded;

        if(secret === secret){
            if(header[key] && (at === "*" || at === "header")) return header[key]
            if(payload[key] && (at === "*" || at === "pl")) return payload[key]
            if(payload.detail[key] && (at === "*" || at === "details")) return payload.detail[key]
        }else{
            return "unauthorized"
        }
    }else{        
        return "Invalid Token"
    }

    return undefined
}