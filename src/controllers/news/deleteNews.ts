import { Handler } from "express"
import db from "../../config/connectDb"

const deleteNews: Handler = async (req, res) => {
  try {
    const { id } = req.params
    const sql = "DELETE FROM news WHERE id = ?"

    db.query(sql, id, (err, result) => {
      if (err) return res.status(400).json({ message: err.message })
      res.json({ message: "Deleted" })
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default deleteNews
