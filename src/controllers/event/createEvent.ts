import { Handler } from "express"
import db from "../../config/connectDb"

const createEvent: Handler = async (req, res) => {
  try {
    const { name } = req.params
    const sql = "INSERT INTO events SET name = ?"
    db.query(sql, name, (err, result) => {
      if (err) return res.status(400).json({ message: err.message })
      res.json({ message: "Created" })
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default createEvent
