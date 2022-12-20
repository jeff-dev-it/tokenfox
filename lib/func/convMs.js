"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ConvertToMs(target, type) {
    let ms = 0;
    switch (type) {
        case "year":
            ms = (1000 * 60 * 60 * 24 * 365) * target;
            break;
        case "day":
            ms = (1000 * 60 * 60 * 24) * target;
            break;
        case "hour":
            ms = (1000 * 60 * 60) * target;
            break;
        case "min":
            ms = (1000 * 60) * target;
            break;
        case "sec":
            ms = 1000 * target;
            break;
        default:
            throw new Error('Invalid Type! Pleas set only "day" | "year" | "min" | "sec" | "hour".');
    }
    return ms;
}
exports.default = ConvertToMs;
