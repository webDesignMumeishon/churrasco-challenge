"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.createUser = void 0;
const userService = __importStar(require("../services/user"));
const utils_1 = require("../utils");
// export const getUser = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const user = await userService.getUserById(Number(id))
//     if (!user) {
//       return res.status(404).send({ msg: 'User not found' })
//     }
//     res.status(200).send(user)
//   } catch (e) {
//     res.status(500).send({ msg: 'Error produced during petition' })
//   }
// }
// export const getUsers = async (_: any, res: Response) => {
//   try {
//     const user = await userService.getUsers();
//     if (!user) {
//       return res.status(404).send('User not found')
//     }
//     res.status(200).send(user)
//   } catch (e) {
//     res.status(500).send({ msg: 'Error produced during petition' })
//   }
// }
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        user.password = (0, utils_1.encrypt)(user.password);
        const newUser = yield userService.insertUser(user);
        res.status(201).send(newUser);
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ msg: 'Error produced during petition' });
    }
});
exports.createUser = createUser;
// export const updateUser = async (req: Request, res: Response) => {
//   try {
//     const id = req.user?.id;
//     const user = req.body
//     if (!await userService.getUserById(Number(id))) {
//       return res.status(404).send({ msg: 'User not found' })
//     }
//     await userService.updateUser(Number(id), user)
//     const userDB = await userService.getUserById(Number(id))
//     res.status(200).send(userDB)
//   } catch (e) {
//     res.status(500).send({ msg: 'Error produced during petition' })
//   }
// }
// export const updateUserAvatar = async (req: Request, res: Response) => {
//   try {
//     const id = req.user?.id;
//     const userDB = await userService.getUserById(Number(id))
//     if (!userDB) {
//       return res.status(404).send({ msg: 'User not found' })
//     }
//     if (req.file) {
//       userDB.avatar = req.file.path
//     }
//     await userService.updateUser(Number(id), userDB)
//     res.status(200).send(userDB)
//   } catch (e) {
//     res.status(500).send({ msg: 'Error produced during petition' })
//   }
// }
// export const getAvatar = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id
//     const user = await userService.getUserAvatar(Number(id))
//     const avatar = user?.avatar
//     if (!avatar) return res.status(404).send({ msg: 'Avantar not found' })
//     fs.stat(avatar, (err, _) => {
//       if (err) return res.status(404).send({ msg: 'Avantar not found' })
//       res.sendFile(path.resolve(avatar))
//     })
//   } catch (e) {
//     res.status(500).send({ msg: 'Error produced during petition' })
//   }
// }
