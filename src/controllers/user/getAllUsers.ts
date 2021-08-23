import { Handler } from "express"
import db from "../../config/connectDb"
import UserModel, { matchPassword } from "../../models/UserModel"

const getAllUsers: Handler = async (req, res) => {
  try {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, users) => {
      if (err) return res.json({ message: err.message })
      res.json(users)
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default getAllUsers
