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
exports.insertUser = exports.getUserByLogin = void 0;
const user_1 = require("../models/user");
const getUserByLogin = (login) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.User.findOne({
        $or: [
            { email: login },
            { username: login }
        ]
    }, {
        _id: 0
    });
});
exports.getUserByLogin = getUserByLogin;
const insertUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const insertedUser = new user_1.User({
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role,
        active: user.active,
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
    });
    yield insertedUser.save();
});
exports.insertUser = insertUser;
// export const getUserById = async (id: number) => await userRepository.findOneBy({ id })
// export const getUserByLogin = async (login: string) => await userRepository.findOneBy({ login })
// export const updateUser = async (id: number, user: User) => await userRepository.update(id, user)
// export const getUserAvatar = async (id: number) => await userRepository.findOne({ where: { id }, select: { avatar: true } })
