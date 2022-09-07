"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const encrypt = (password) => {
    const hashedPassword = crypto_1.default.createHash('sha256').update(password).digest();
    return hashedPassword.toString('hex');
};
exports.encrypt = encrypt;
const compare = (plainPassword, hashedPassword) => {
    const hashedEnteredPassword = crypto_1.default.createHash('sha256').update(plainPassword).digest();
    return hashedEnteredPassword.toString('hex') === hashedPassword;
};
exports.compare = compare;
