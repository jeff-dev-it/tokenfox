import ManagerToken from "./class/Manager"
declare const fwt: FWT.fwt;

export = fwt
export as namespace fwt

declare namespace FWT{
    type date_expires_type = "day" | "year" | "min" | "sec" | "hour"
    interface ParamHeader {
        origin?: string,
        date_expires?: number,
        date_expires_type?: date_expires_type,
    }

    interface ParamPayload {
        occupation?: string
        username?: string
        secret: string,
        detail?: {[x: string]: any}
    }

    interface Header {
        origin: string,
        date_creation: number,
        date_expires: number,
        uuid: string
    }

    interface Payload {
        occupation?: string
        username?: string
        secret: string,
        detail: {[x: string]: any}
    }

    interface Manager{
        GetUsername: ()=> string
        GetInfo: (key: string)=> string
        GetUUID: ()=> string
        Get: (key: string, from: AtParam)=> void
        SetInfo: (value: object)=> void
        SetUsername: (value: string)=> void
        SetOrigin: (value: string)=> void
        ExpiresAdd: (add: number, type?: date_expires_type)=> void
        Refresh: (v: string | undefined)=> void
    }

    type Sign = (header: ParamHeader, payload: ParamPayload) => string
    type IsValid = (token: string, secret: string) => boolean
    type ValidOrigin = (token: string, secret: string, origin: string) => boolean

    interface fwt{
        ManagerToken: {
            (token: string, secure: string): Manager,
            new (token: string, secure: string): Manager,
        },
        Sign: Sign,
        IsValid: IsValid,
        ValidOrigin: ValidOrigin
    }
}