import { AtParam, date_expires_type } from "./funcs"

export interface Manager{
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