"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atob = exports.btoa = void 0;
function btoa(b) {
    return Buffer.from(b).toString("base64");
}
exports.btoa = btoa;
function atob(b) {
    return Buffer.from(b, "base64").toString();
}
exports.atob = atob;
