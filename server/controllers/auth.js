import bcrypt from "bcryptjs"
import User from "../models/User.js"
import {createError} from "../utils/error.js"

export const register = async (req, res, next) => {
  try{
    const {name, email, password} = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(200).send("Email already exist.");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hash
    })
    await newUser.save();
    res.status(201).send("User has been created")
  }catch(err){
    next(err);
  }
}

export const login = async(req, res, next)=>{
  const user = await User.findOne({email: req.body.email})
  if(!user) 
    return next(createError(404, "User not found"))

  const isPasswordCorrect = await bcrypt.compare(
    req.body.password, user.password
  )

  if(!isPasswordCorrect) 
    return next(createError(401, "Wrong Email and Password"))

  res.status(200).send("Login successfull")
}