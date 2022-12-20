"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidOrigin = void 0;
const hash_1 = require("../utils/hash");
function IsValid(token, secure) {
    try {
        if (!token)
            return false;
        const ex = (0, hash_1.decodeToken)(token, secure);
        if (ex) {
            const [payload, header, secret] = ex;
            try {
                if (secure === secret) {
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
    }
    catch (error) { }
    return false;
}
exports.default = IsValid;
function ValidOrigin(token, secure, origin) {
    try {
        if (!token)
            return false;
        const ex = (0, hash_1.decodeToken)(token, secure);
        if (ex) {
            const [payload, header, secret] = ex;
            try {
                if (secure === secret) {
                    if (Date.now() > header.date_expires) {
                        console.error("Token has expired!");
                        return false;
                    }
                    if (header.origin.replaceAll(" ", "").split(",").includes(origin) || header.origin == "*") {
                        return true;
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
            console.error("Secret key is invalid!");
        }
    }
    catch (error) { }
    return false;
}
exports.ValidOrigin = ValidOrigin;
