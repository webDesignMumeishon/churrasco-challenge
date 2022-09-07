"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeJWT = exports.signJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_KEY = process.env.JWT_SECRET_KEY || 'SUPER_SECRET_KEY';
const signJWT = (payload) => jsonwebtoken_1.default.sign(payload, JWT_KEY, { expiresIn: '7d' });
exports.signJWT = signJWT;
const decodeJWT = (token) => {
    return jsonwebtoken_1.default.verify(token.replace(/['"]+/g, ''), JWT_KEY);
};
exports.decodeJWT = decodeJWT;
