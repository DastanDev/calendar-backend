import { Handler } from "express"
import db from "../../config/connectDb"

const updateNews: Handler = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, image, tag } = req.body
    if (!title || !content || !image || !tag) throw Error("All fields required")
    const sql = "SELECT author FROM news WHERE id = ?"
    const query = [id]
    db.query(sql, query, (err, result) => {
      if (err) return res.status(400).json({ message: err.message })
      //
      const newsId = result[0].author
      if (newsId !== req.user.id && !req.user.isAdmin)
        return res.status(400).json({ message: "Not authorized" })
      //
      const sql2 = "UPDATE news SET ? WHERE id = ?"
      const query2 = [{ title, content, image, tag }, id]
      db.query(sql2, query2, (err, result) => {
        if (err) return res.status(400).json({ message: err.message })
        res.json({ message: "updated" })
      })
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default updateNews
