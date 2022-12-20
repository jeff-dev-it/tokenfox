export type date_expires_type = "day" | "year" | "min" | "sec" | "hour"

export interface ParamHeader {
    origin?: string,
    date_expires?: number,
    date_expires_type?: date_expires_type,
}

export interface ParamPayload {
    username?: string
    secret: string | undefined,
    detail?: {[x: string]: any}
}

export interface Header {
    origin: string,
    date_creation: number,
    date_expires: number,
    uuid: string
}

export interface Payload {
    username?: string
    detail: {[x: string]: any}
}

export type AtParam = "*"|"pl"|"header"|"details" 