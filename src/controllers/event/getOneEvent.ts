import { Handler } from "express"
import db from "../../config/connectDb"

const getOneEvent: Handler = async (req, res) => {
  try {
    const { id } = req.params
    const sql = "SELECT * FROM events WHERE id = ?"
    db.query(sql, id, (err, result) => {
      if (err) return res.status(400).json({ message: err.message })
      res.json(result)
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default getOneEvent
