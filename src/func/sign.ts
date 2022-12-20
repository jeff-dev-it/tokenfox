import { Header, ParamHeader, ParamPayload, Payload } from "../interfaces/funcs";
import ConvertToMs from "./convMs";
import MaskText, { RandomNum } from "./maskText";
import { encodeToken } from "../utils/hash";


export default function Sign(header: ParamHeader, payload: ParamPayload):string {
    const now = Date.now()
    const header_export:Header = {
        date_creation: now,
        date_expires: now + ConvertToMs(header.date_expires || 30, header.date_expires_type || "min"),
        origin: header.origin || "*",
        uuid: MaskText(RandomNum(1000000000000000, 9999999999999999).toString(), "###-######-##-#.###")
    }
    let secret = payload.secret || "";

    payload.secret = undefined;

    const payload_export:Payload = {
        detail: {},
        ...payload,
    }

    const b64 = encodeToken(payload_export, header_export, secret)

    return b64
}