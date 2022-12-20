"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getter_1 = require("../func/getter");
const sign_1 = __importDefault(require("../func/sign"));
const token = (0, sign_1.default)({
    date_expires: 30,
    origin: "*"
}, {
    secret: "teste"
});
console.log(token, (0, getter_1.GetUUID)(token, "teste"));
