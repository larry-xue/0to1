"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (date) => {
    const [day, month, year] = date
        .split('/')
        .map((value) => parseFloat(value));
    // month is zero index
    return new Date(year, month - 1, day);
};
exports.dateStringToDate = dateStringToDate;
