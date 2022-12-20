import { Header, Payload } from "../interfaces/funcs";
import { atob, btoa } from "../utils/b64";
import { decodeToken } from "../utils/hash";


export default function IsValid(token: string, secure: string){
    try {
        if(!token) return false

        const ex: any =  decodeToken(token, secure);
        if(ex){
            const [payload, header, secret]: [Payload, Header, string] = ex;
            try {
                if(secure === secret){
                    if(Date.now() > header.date_expires){
                        console.error("Token has expired!");
                        return false           
                    }        
                    return true
                }    
            } catch (error) {
                console.log(error);
            }
            
            console.error("Secret key is invalid!");   
        } 
    } catch (error) {}
    return false
}

export function ValidOrigin(token: string, secure: string, origin: string){
    try {
        if(!token) return false

        const ex: any =  decodeToken(token, secure);
        if(ex){
            const [payload, header, secret]: [Payload, Header, string] = ex;
            try {
                if(secure === secret){
                    if(Date.now() > header.date_expires){
                        console.error("Token has expired!");
                        return false           
                    }
                    if(header.origin.replaceAll(" ", "").split(",").includes(origin) || header.origin == "*"){
                        return true
                    }
                }    
            } catch (error) {
                console.log(error);
            }
            
            console.error("Secret key is invalid!");   
        } 
    } catch (error) {}
    return false
}