import dotenv from "dotenv"
dotenv.config()
import express from "express"
import db from "./config/connectDb"
import colors from "colors"

const app = express()
db.connect((err) => {
  if (err) return console.error(colors.red(err.message))
  console.log(colors.blue("Database Connected"))
})

app.get("/", (req, res) => {
  res.send("good")
})

const PORT = 5000 ?? process.env.PORT

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
