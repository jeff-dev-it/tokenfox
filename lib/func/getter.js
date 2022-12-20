"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOccupation = exports.GetUser = exports.GetKey = exports.GetUUID = void 0;
const b64_1 = require("../b64");
function GetUUID(token, secret) {
    try {
        if (!token)
            return false;
        const [header_encoded, payload_encoded] = token.split(".");
        const [payload, header] = [JSON.parse((0, b64_1.atob)(payload_encoded)), JSON.parse((0, b64_1.atob)(header_encoded))];
        try {
            if (payload.secret === (0, b64_1.btoa)(encodeURIComponent(secret)) || (0, b64_1.atob)(decodeURIComponent(payload.secret)) === secret) {
                if (Date.now() > header.date_expires) {
                    console.error("Token has expired!");
                    return "token-expired";
                }
                return header.uuid;
            }
        }
        catch (err) {
            console.log(err);
        }
        console.error("Secret key is invalid!");
    }
    catch (error) {
        return "invalid-token";
    }
    return "invalid-secret";
}
exports.GetUUID = GetUUID;
function GetKey(token, secret, key) {
    try {
        if (!token)
            return false;
        const [header_encoded, payload_encoded] = token.split(".");
        const [payload, header] = [JSON.parse((0, b64_1.atob)(payload_encoded)), JSON.parse((0, b64_1.atob)(header_encoded))];
        if (payload.secret === (0, b64_1.btoa)(encodeURIComponent(secret)) || (0, b64_1.atob)(decodeURIComponent(payload.secret)) === secret) {
            if (Date.now() > header.date_expires) {
                console.error("Token has expired!");
                return "token-expired";
            }
            return payload.detail[key];
        }
    }
    catch (err) {
        console.log(err);
        return "invalid-token";
    }
    console.error("Secret key is invalid!");
    return "invalid-secret";
}
exports.GetKey = GetKey;
function GetUser(token, secret) {
    try {
        if (!token)
            return false;
        const [header_encoded, payload_encoded] = token.split(".");
        const [payload, header] = [JSON.parse((0, b64_1.atob)(payload_encoded)), JSON.parse((0, b64_1.atob)(header_encoded))];
        try {
            if (payload.secret === (0, b64_1.btoa)(encodeURIComponent(secret)) || (0, b64_1.atob)(decodeURIComponent(payload.secret)) === secret) {
                if (Date.now() > header.date_expires) {
                    console.error("Token has expired!");
                    return "token-expired";
                }
                return payload.username;
            }
        }
        catch (err) {
            console.log(err);
        }
        console.error("Secret key is invalid!");
        return "invalid-secret";
    }
    catch (error) {
        return "invalid-token";
    }
}
exports.GetUser = GetUser;
function GetOccupation(token, secret) {
    if (!token)
        return false;
    try {
        const [header_encoded, payload_encoded] = token.split(".");
        const [payload, header] = [JSON.parse((0, b64_1.atob)(payload_encoded)), JSON.parse((0, b64_1.atob)(header_encoded))];
        try {
            if (payload.secret === (0, b64_1.btoa)(encodeURIComponent(secret)) || (0, b64_1.atob)(decodeURIComponent(payload.secret)) === secret) {
                if (Date.now() > header.date_expires) {
                    console.error("Token has expired!");
                    return "token-expired";
                }
                return payload.occupation;
            }
        }
        catch (err) {
            console.log(err);
        }
        console.error("Secret key is invalid!");
        return "invalid-secret";
    }
    catch (error) {
        return "invalid-token";
    }
}
exports.GetOccupation = GetOccupation;
