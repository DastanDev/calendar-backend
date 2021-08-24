import { Handler } from "express"
import db from "../../config/connectDb"
import hashPassword from "../../config/hashPassword"

const updateUser: Handler = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body
    if (!password || !email || !firstName || !lastName)
      throw Error("All fields required")
    const sql = "UPDATE users SET ? WHERE id = ?"
    const query = [
      { firstName, lastName, email, password: await hashPassword(password) },
      ,
      req.user.id,
    ]
    db.query(sql, query, (err, result) => {
      if (err) return res.status(400).json({ message: err.message })
      res.json({ message: "updated" })
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default updateUser
