import dotenv from "dotenv"
dotenv.config()
import express from "express"
import db from "./config/connectDb"
import colors from "colors"
import userRouter from "./routers/user/userRouter"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

db.connect((err) => {
  if (err) return console.error(colors.red(err.message))
  console.log(colors.blue("Database Connected"))
})

app.get("/", (req, res) => {
  res.send("good")
})

app.use("/api/user", userRouter)

const PORT = 5000 ?? process.env.PORT

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
