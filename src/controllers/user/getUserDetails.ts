import { Handler } from "express"
import db from "../../config/connectDb"
import UserModel from "../../models/UserModel"

const getUserDetails: Handler = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) throw Error("Id required")
    const sql = "SELECT * FROM USER WHERE id = ?"
    const user = { id }
    db.query(sql, user, (err, result) => {
      if (err) return res.json({ message: err.message })
      res.json({ message: result[0].rows })
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default getUserDetails
