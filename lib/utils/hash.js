"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = exports.decodeToken = exports.encodeToken = void 0;
const b64_1 = require("./b64");
function encodeToken(payload, header, secret) {
    const encode = new TextEncoder();
    const json = {
        header: JSON.stringify(header),
        pay: JSON.stringify(payload)
    };
    let secret_ = ((0, b64_1.btoa)(encodeURIComponent((0, b64_1.btoa)(JSON.stringify(encode.encode((0, b64_1.btoa)(encodeURIComponent(secret))))))));
    return `${(0, b64_1.btoa)(json.header)}.${(0, b64_1.btoa)(json.pay)}.${secret_}`;
}
exports.encodeToken = encodeToken;
function decodeToken(token, secure) {
    if (!token)
        return [null, null];
    const decode = new TextDecoder("utf-8");
    const [header_encoded, payload_encoded, secret_encoded] = token.split(".");
    const [payload, header, secret] = [
        JSON.parse((0, b64_1.atob)(payload_encoded)),
        JSON.parse((0, b64_1.atob)(header_encoded)),
        (0, b64_1.atob)(decodeURIComponent(decode.decode(new Uint8Array(Object.values(JSON.parse(((0, b64_1.atob)(decodeURIComponent((0, b64_1.atob)(secret_encoded))))))))))
    ];
    return secret === secure ? [payload, header, secret] : "Unauthorized";
}
exports.decodeToken = decodeToken;
function Get(token, secure, key, at = "*") {
    const decoded = decodeToken(token, secure);
    if (decoded) {
        const [payload, header, secret] = decoded;
        if (secret === secret) {
            if (header[key] && (at === "*" || at === "header"))
                return header[key];
            if (payload[key] && (at === "*" || at === "pl"))
                return payload[key];
            if (payload.detail[key] && (at === "*" || at === "details"))
                return payload.detail[key];
        }
        else {
            return "unauthorized";
        }
    }
    else {
        return "Invalid Token";
    }
    return undefined;
}
exports.Get = Get;
