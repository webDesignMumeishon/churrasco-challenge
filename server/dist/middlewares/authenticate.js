"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const moment_1 = __importDefault(require("moment"));
const utils_1 = require("../utils");
const authenticate = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send({ msg: 'Unauthorized' });
        }
        const payload = (0, utils_1.decodeJWT)(req.headers.authorization);
        if (payload.exp && payload.exp <= Number(moment_1.default.now().toString().slice(0, 10)))
            return res.status(400).send({ msg: 'Expired token.' });
        if (req.params.id && req.params.id != payload.id)
            return res.status(400).send({ msg: 'Invalid user.' });
        req.user = {
            _id: payload._id,
            username: payload.username,
            active: payload.active,
            birthday: payload.birthday,
            email: payload.active,
            firstName: payload.active,
            lastName: payload.lastName,
            lastLogin: payload.lastName,
            password: payload.password,
            role: payload.role,
        };
    }
    catch (e) {
        return res.status(401).send({ msg: 'Unauthorized' });
    }
    next();
};
exports.authenticate = authenticate;
