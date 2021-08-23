import { Handler } from "express"
import db from "../../config/connectDb"

const updateEvent: Handler = async (req, res) => {
  try {
    const { name } = req.body
    const { id } = req.params
    const sql = "UPDATE FROM events SET ? WHERE id = ?"
    const query = [{ name }, id]
    db.query(sql, query, (err, result) => {
      if (err) return res.status(400).json({ message: err.message })
      res.json(result)
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default updateEvent
