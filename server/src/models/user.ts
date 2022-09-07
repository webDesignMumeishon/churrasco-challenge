import mongoose, { Schema } from "mongoose";
import User from '../interfaces/user'

const userSchema = new mongoose.Schema<User>({
  username: String,
  email: String,
  password: {type: String, required: true},
  lastLogin: Date,
  role: String,
  active: Boolean,
  firstName: String,
  lastName: String,
  birthday: Date
});

export const User = mongoose.model('User', userSchema);