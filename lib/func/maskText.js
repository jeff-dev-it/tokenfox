"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNum = exports.RanText = void 0;
function MaskText(text, template) {
    let res = template;
    for (const char of text) {
        res = res.replace("#", char);
    }
    return res;
}
exports.default = MaskText;
function RanText(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
exports.RanText = RanText;
function RandomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
exports.RandomNum = RandomNum;
