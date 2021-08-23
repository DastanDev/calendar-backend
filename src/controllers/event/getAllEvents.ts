import { Handler } from "express"
import db from "../../config/connectDb"

const getAllEvents: Handler = async (req, res) => {
  try {
    const sql = "SELECT * FROM events;"
    db.query(sql, (err, result) => {
      if (err) return res.status(400).json({ message: err.message })
      res.json(result)
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default getAllEvents
