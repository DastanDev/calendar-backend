import { Handler } from "express"
import db from "../config/connectDb"
import JWT from "jsonwebtoken"

const adminAuth: Handler = async (req, res, next) => {
  try {
    if (!req?.user?.id || !req.user.isAdmin) throw Error("Not authorized")
    next()
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

export default adminAuth
