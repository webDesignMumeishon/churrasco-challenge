"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: String,
    email: String,
    password: { type: String, required: true },
    lastLogin: Date,
    role: String,
    active: Boolean,
    firstName: String,
    lastName: String,
    birthday: Date
});
exports.User = mongoose_1.default.model('User', userSchema);
