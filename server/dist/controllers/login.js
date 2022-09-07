"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_1 = require("../services/user");
const utils_1 = require("../utils");
const index_1 = require("../enums/index");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { login, password } = req.body;
        let userInstance = yield (0, user_1.getUserByLogin)(login);
        if (userInstance === null) {
            return res.status(404).send({ msg: "Invalid user or password" });
        }
        if (!(0, utils_1.compare)(password, userInstance.password)) {
            return res.status(400).send({ msg: "Invalid user or password" });
        }
        if (userInstance.role !== index_1.Role.ADMIN || !userInstance.active) {
            return res.status(403).send({ msg: "Insufficient access" });
        }
        //don't send the whole user
        const token = (0, utils_1.signJWT)(Object.assign({}, userInstance));
        return res.status(202).send({ token });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ msg: 'Error produced during petition' });
    }
});
exports.login = login;
