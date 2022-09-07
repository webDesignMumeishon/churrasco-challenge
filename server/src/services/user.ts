import { HydratedDocument } from 'mongoose';

import { User as UserSchema } from "../models/user";
import  IUser  from "../interfaces/user";

export const getUserByLogin = async (login : string) => {
    
    return await UserSchema.findOne(
    {
        $or: [
            {email: login},
            {username: login}
        ]
    },
    {
        _id:0
    }
    )
}

export const insertUser = async (user: IUser) => {

    const insertedUser : HydratedDocument<IUser> = new UserSchema({
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role,
        active: user.active,
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
    });
    
    await insertedUser.save();
}

// export const getUserById = async (id: number) => await userRepository.findOneBy({ id })

// export const getUserByLogin = async (login: string) => await userRepository.findOneBy({ login })


// export const updateUser = async (id: number, user: User) => await userRepository.update(id, user)

// export const getUserAvatar = async (id: number) => await userRepository.findOne({ where: { id }, select: { avatar: true } })
