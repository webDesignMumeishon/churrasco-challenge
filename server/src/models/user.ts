import mongoose, { Schema } from "mongoose";
import User from '../interfaces/user'

const userSchema = new mongoose.Schema<User>({
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

export const User = mongoose.model('User', userSchema);