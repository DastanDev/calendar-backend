import { Handler } from "express"
import db from "../../config/connectDb"

const updateNews: Handler = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, image } = req.body
    const sql = "UPDATE news SET ? WHERE id = ?"
    const query = [{ title, content, image }, id]
    db.query(sql, query, (err, result) => {
      if (err) return res.status(400).json({ message: err.message })
      res.json({ message: "updated" })
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default updateNews
