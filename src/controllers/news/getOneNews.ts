import { Handler } from "express"
import db from "../../config/connectDb"

const getOneNews: Handler = async (req, res) => {
  try {
    const { id } = req.params
    const sql = "SELECT * FROM news WHERE id = ?"
    db.query(sql, id, (err, result) => {
      if (err) return res.status(400).json({ message: err.message })
      res.json(result[0])
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default getOneNews
