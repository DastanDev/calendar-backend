import { error } from "console"
import { Handler } from "express"
import db from "../../config/connectDb"

const createNewUser: Handler = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body
    if (!firstName || !lastName || !email)
      throw Error("All fields are required")
    const sql = `INSERT INTO users SET ?`
    const user = { firstName, lastName, email }
    db.query(sql, user, (err, user) => {
      if (err) return res.json({ message: err.message })
      res.json({ message: "user created" })
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default createNewUser
