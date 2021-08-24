import { Handler } from "express"
import db from "../../config/connectDb"

const getUserDetails: Handler = async (req, res) => {
  try {
    const sql = "SELECT * FROM USERS WHERE id = ?"
    const user = { id: req.user.id }
    db.query(sql, user, (err, result) => {
      if (err) return res.json({ message: err.message })
      res.json(result[0])
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default getUserDetails
