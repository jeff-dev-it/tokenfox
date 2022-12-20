"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convMs_1 = __importDefault(require("./convMs"));
const maskText_1 = __importStar(require("./maskText"));
const b64_1 = require("../b64");
function Sign(header, payload) {
    const now = Date.now();
    const header_export = {
        date_creation: now,
        date_expires: now + (0, convMs_1.default)(header.date_expires || 30, header.date_expires_type || "min"),
        origin: header.origin || "*",
        uuid: (0, maskText_1.default)((0, maskText_1.RandomNum)(1000000000000000, 9999999999999999).toString(), "###-######-##-#.###")
    };
    const payload_export = {
        detail: {},
        ...payload,
        secret: encodeURIComponent((0, b64_1.btoa)(payload.secret)),
    };
    const json = {
        header: JSON.stringify(header_export),
        pay: JSON.stringify(payload_export)
    };
    const b64 = `${(0, b64_1.btoa)(json.header)}.${(0, b64_1.btoa)(json.pay)}`;
    return b64;
}
exports.default = Sign;
