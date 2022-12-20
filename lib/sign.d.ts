declare const sign: FWT.Sign;

export = sign
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

    interface Getter {
        GetKey: (token: string, secret: string, key: string) => string
        GetUUID: (token: string, secret: string) => string
        GetUser: (token: string, secret: string) => string
        GetOccupation: (token: string, secret: string) => string
    }
    type Sign = (header: ParamHeader, payload: ParamPayload) => string
    type IsValid = (token: string, secret: string) => boolean
    type ValidOrigin = (token: string, secret: string, origin: string) => boolean

    interface fwt{
        Getter: Getter,
        Sign: Sign,
        IsValid: IsValid,
        ValidOrigin: ValidOrigin
    }
}