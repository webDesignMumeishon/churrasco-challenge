import mongoose, { Schema } from "mongoose";
import IUser from '../interfaces/user'
import jwt, {JwtPayload} from 'jsonwebtoken';

const userSchema = new mongoose.Schema<IUser>({
   _id : {
    required: false, 
    type: Schema.Types.ObjectId
  },
  username: {
    type: String, 
    required: true, 
    unique: true
  },
  email: {
    type: String, 
    required: true, 
    unique: true
  },
  password: {
    type: String, 
    required: true
  },
  lastLogin: Date,
  role: String,
  active: Boolean,
  firstName: String,
  lastName: String,
  birthday: Date
});

userSchema.methods.generateAuthToken = function () {
  const JWT_KEY = process.env.JWT_SECRET_KEY || 'SUPER_SECRET_KEY';
  const token = jwt.sign({id: this._id}, JWT_KEY, { expiresIn: '7d' })
  return token
}

export const User = mongoose.model('User', userSchema);