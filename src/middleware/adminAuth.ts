import { Handler } from "express"
import db from "../config/connectDb"
import JWT from "jsonwebtoken"

const adminAuth: Handler = async (req, res, next) => {
  try {
    const tokenWithBearer = req.headers.authorization
    if (!tokenWithBearer || typeof tokenWithBearer !== "string")
      throw Error("Not authorized")
    const token = tokenWithBearer.split(" ")[1]
    const decoded: any = JWT.verify(token, process.env.JWT_SECRET)
    const sql = "SELECT * FROM users WHERE id = ?"

    db.query(sql, decoded.id, (err, user) => {
      if (err) return res.status(401).json({ message: err.message })
      if (!user[0].isAdmin)
        return res.status(401).json({ message: "Not authorized" })
      next()
    })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

export default adminAuth
