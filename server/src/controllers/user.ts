import { Request, Response } from "express";
import fs from 'fs';
import path from "path";

import * as userService from "../services/user";
import { encrypt } from "../utils";


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

export const createUser = async (req: Request, res: Response) => {

  try {

    const user = req.body;

    user.password = encrypt(user.password)
    const newUser = await userService.insertUser(user);

    res.status(201).send(newUser)

  } catch (e) {
    console.log(e)
    res.status(500).send({ msg: 'Error produced during petition' })
  }
}

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
