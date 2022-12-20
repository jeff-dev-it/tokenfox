import { atob, btoa } from "../utils/b64";
import { Header, Payload } from "../interfaces/funcs";

export function GetUUID(token: string, secret: string){
    try {
        if(!token) return false

        const [header_encoded, payload_encoded] = token.split(".")
        const [payload, header]: [Payload, Header] = [JSON.parse(atob(payload_encoded)), JSON.parse(atob(header_encoded))]
        
        try{
           if(payload.secret === btoa(encodeURIComponent(secret)) || atob(decodeURIComponent(payload.secret)) === secret){
                if(Date.now() > header.date_expires){
                    console.error("Token has expired!");
                    return "token-expired"
                }
    
                return header.uuid
            }
    
        }catch(err){
            console.log(err);
        }
    
        console.error("Secret key is invalid!");    
    } catch (error) {
        return "invalid-token"
    }
    return "invalid-secret"
}

export function GetKey(token: string, secret: string, key: string){
        try{
        if(!token) return false
        const [header_encoded, payload_encoded] = token.split(".")
        const [payload, header]: [Payload, Header] = [JSON.parse(atob(payload_encoded)), JSON.parse(atob(header_encoded))]
            if(payload.secret === btoa(encodeURIComponent(secret)) || atob(decodeURIComponent(payload.secret)) === secret){
            if(Date.now() > header.date_expires){
                console.error("Token has expired!");
                return "token-expired"
            }

            return payload.detail[key]
        }
    }catch(err){
        console.log(err);
        return "invalid-token"
    }

    console.error("Secret key is invalid!");
    
    return "invalid-secret"
}

export function GetUser(token: string, secret: string){
    try {
        if(!token) return false

        const [header_encoded, payload_encoded] = token.split(".")
        const [payload, header]: [Payload, Header] = [JSON.parse(atob(payload_encoded)), JSON.parse(atob(header_encoded))]
        
        try{
            if(payload.secret === btoa(encodeURIComponent(secret)) || atob(decodeURIComponent(payload.secret)) === secret){
                if(Date.now() > header.date_expires){
                    console.error("Token has expired!");
                    return "token-expired"
                }

                return payload.username
            }

        }catch(err){
            console.log(err);
        }

        console.error("Secret key is invalid!");
        
        return "invalid-secret"
    } catch (error) {
        return "invalid-token"
    }
}

export function GetOccupation(token: string, secret: string){
    if(!token) return false
    try {       
        const [header_encoded, payload_encoded] = token.split(".")
        const [payload, header]: [Payload, Header] = [JSON.parse(atob(payload_encoded)), JSON.parse(atob(header_encoded))]
        
        try{
            if(payload.secret === btoa(encodeURIComponent(secret)) || atob(decodeURIComponent(payload.secret)) === secret){
                if(Date.now() > header.date_expires){
                    console.error("Token has expired!");
                    return "token-expired"
                }

                return payload.occupation
            }

        }catch(err){
            console.log(err);
        }

        console.error("Secret key is invalid!");
        
        return "invalid-secret"
    } catch (error) {
        return "invalid-token"
    }
}