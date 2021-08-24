import { Handler } from "express"
import slugify from "slugify"
import db from "../../config/connectDb"

const createNews: Handler = async (req, res) => {
  try {
    const { title, content, image } = req.body
    if (!title || !content || !image) throw Error("All fields required.")
    const sql = "INSERT INTO news SET ?"
    const query = { title, content, image, slug: slugify(title) }
    db.query(sql, query, (err, result) => {
      if (err) return res.status(400).json({ message: err.message })
      res.json({ message: "News created" })
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default createNews
