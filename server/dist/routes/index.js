"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const login_1 = __importDefault(require("./login"));
const product_1 = __importDefault(require("./product"));
exports.default = (app) => {
    app.use('/user', user_1.default);
    app.use('/login', login_1.default);
    app.use('/product', product_1.default);
};
