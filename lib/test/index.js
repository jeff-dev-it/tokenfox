"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("../class/Manager"));
const sign_1 = __importDefault(require("../func/sign"));
const token = (0, sign_1.default)({
    date_expires: 30,
    origin: "*"
}, {
    username: "teste",
    secret: "teste",
    detail: {
        username: "teste"
    }
});


const tk = new Manager_1.default(token, "teste");
/**
 * Gera um novo token em cima do antigo
 */
let a = tk.ExpiresAdd(20, "year");
/**
 * Altera o token dentro de tk para o novo token
 */
tk.Refresh(a);
