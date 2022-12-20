"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convMs_1 = __importDefault(require("../func/convMs"));
const getter_1 = require("../func/getter");
const hash_1 = require("../utils/hash");
class ManagerToken {
    #token = "";
    #secure = "";
    constructor(token, secure) {
        this.tk = token;
        this.sec = secure;
    }
    set tk(v) {
        this.#token = v;
    }
    set sec(v) {
        this.#secure = v;
    }
    GetUsername() {
        return (0, getter_1.GetUser)(this.#token, this.#secure);
    }
    GetInfo(key) {
        return (0, getter_1.GetDetails)(this.#token, this.#secure, key);
    }
    GetUUID() {
        return (0, getter_1.GetUUID)(this.#token, this.#secure);
    }
    Get(key, from) {
        return (0, hash_1.Get)(this.#token, this.#secure, key, from);
    }
    SetInfo(value) {
        const decoded = (0, hash_1.decodeToken)(this.#token, this.#secure);
        if (decoded) {
            const [payload, header, secret] = decoded;
            payload.detail = {
                ...payload.detail,
                ...value
            };
            const newToken = (0, hash_1.encodeToken)(payload, header, secret);
            return newToken;
        }
        else {
            console.log("The token is invalid!");
        }
    }
    SetUsername(value) {
        const decoded = (0, hash_1.decodeToken)(this.#token, this.#secure);
        if (decoded) {
            const [payload, header, secret] = decoded;
            payload.username = value;
            const newToken = (0, hash_1.encodeToken)(payload, header, secret);
            return newToken;
        }
        else {
            console.log("The token is invalid!");
        }
    }
    SetOrigin(value) {
        const decoded = (0, hash_1.decodeToken)(this.#token, this.#secure);
        if (decoded) {
            const [payload, header, secret] = decoded;
            header.origin = value;
            const newToken = (0, hash_1.encodeToken)(payload, header, secret);
            return newToken;
        }
        else {
            console.log("The token is invalid!");
        }
    }
    ExpiresAdd(add, type) {
        const decoded = (0, hash_1.decodeToken)(this.#token, this.#secure);
        if (decoded) {
            const [payload, header, secret] = decoded;
            header.date_expires = header.date_expires + (0, convMs_1.default)(add || 30, type || "min");
            const newToken = (0, hash_1.encodeToken)(payload, header, secret);
            return newToken;
        }
        else {
            console.log("The token is invalid!");
        }
    }
    Refresh(v) {
        if (v)
            this.tk = v;
    }
}
exports.default = ManagerToken;
