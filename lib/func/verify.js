"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidOrigin = void 0;
const b64_1 = require("../b64");
function IsValid(token, secret) {
    try {
        if (!token)
            return false;
        const [header_encoded, payload_encoded] = token?.split(".");
        const [payload, header] = [JSON.parse((0, b64_1.atob)(payload_encoded)), JSON.parse((0, b64_1.atob)(header_encoded))];
        try {
            if (payload.secret === (0, b64_1.btoa)(encodeURIComponent(secret)) || (0, b64_1.atob)(decodeURIComponent(payload.secret)) === secret) {
                if (Date.now() > header.date_expires) {
                    console.error("Token has expired!");
                    return false;
                }
                return true;
            }
        }
        catch (error) {
            console.log(error);
        }
        console.error("Secret key is invalid!");
    }
    catch (error) { }
    return false;
}
exports.default = IsValid;
function ValidOrigin(token, secret, origin) {
    try {
        if (!token)
            return false;
        const [header_encoded, payload_encoded] = token?.split(".");
        const [payload, header] = [JSON.parse((0, b64_1.atob)(payload_encoded)), JSON.parse((0, b64_1.atob)(header_encoded))];
        try {
            if (payload.secret === (0, b64_1.btoa)(encodeURIComponent(secret)) || (0, b64_1.atob)(decodeURIComponent(payload.secret)) === secret) {
                if (Date.now() > header.date_expires) {
                    console.error("Token has expired!");
                    return false;
                }
                if (header.origin.replaceAll(" ", "").split(",").includes(origin) || header.origin == "*") {
                    return true;
                }
                return false;
            }
        }
        catch (error) {
            console.log(error);
        }
        console.error("Secret key is invalid!");
    }
    catch (error) { }
    return false;
}
exports.ValidOrigin = ValidOrigin;
