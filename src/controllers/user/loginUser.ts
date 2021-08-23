import { Handler } from "express-serve-static-core"
import db from "../../config/connectDb"
import genToken from "../../config/genToken"
import matchPassword from "../../config/matchPassword"

// /user/login
// POST

const loginUser: Handler = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) throw Error("All fields required")
    const sql = "SELECT id, email, password FROM users WHERE ?"
    const query = { email }
    db.query(sql, query, async (err, result) => {
      if (err) return res.json({ message: err.message })
      if (!result[0]) return res.json({ message: "User does not exist" })
      const passwordMatches = await matchPassword(password, result[0].password)
      if (!passwordMatches) return res.json({ message: "Incorrect password" })
      res.json({ email: result[0].email, token: genToken(result[0].id) })
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default loginUser
