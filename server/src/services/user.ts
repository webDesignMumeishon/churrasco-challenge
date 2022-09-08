import { HydratedDocument } from 'mongoose';
import { encrypt } from "../utils";

import { User as UserSchema } from "../models/user";
import  IUser  from "../interfaces/user";

export const getUserByLogin = async (login : string) => {
    
    return await UserSchema.findOne(
        {
            $or: [
                {email: login},
                {username: login}
            ]
        }
    )
}

export const insertUser = async (user: IUser) => {
    const insertedUser : HydratedDocument<IUser> = new UserSchema({
        username: user.username,
        email: user.email,
        password: encrypt(user.password),
        role: user.role,
        active: user.active,
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
    });
    await insertedUser.save();
}

