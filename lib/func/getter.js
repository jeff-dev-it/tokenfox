"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = exports.GetDetails = exports.GetUUID = void 0;
const hash_1 = require("../utils/hash");
function GetUUID(token, secret) {
    try {
        if (!token)
            return false;
        return (0, hash_1.Get)(token, secret, "uuid", "header");
    }
    catch (error) {
        return "invalid-token";
    }
}
exports.GetUUID = GetUUID;
function GetDetails(token, secret, key) {
    try {
        if (!token)
            return false;
        return (0, hash_1.Get)(token, secret, key, "details");
    }
    catch (err) {
        console.log(err);
        return "invalid-token";
    }
}
exports.GetDetails = GetDetails;
function GetUser(token, secret) {
    try {
        if (!token)
            return false;
        return (0, hash_1.Get)(token, secret, "username", "pl");
    }
    catch (error) {
        return "invalid-token";
    }
}
exports.GetUser = GetUser;
