import { Handler } from "express"
import db from "../../config/connectDb"
import genToken from "../../config/genToken"
import hashPassword from "../../config/hashPassword"

const createNewUser: Handler = async (req, res) => {
  try {
    console.log(req.body)
    const {
      firstName,
      lastName,
      email,
      password,
      birthday,
      profession,
      phone,
      gender,
      degree,
      descriptionOfEntrepreneurship,
    } = req.body
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !birthday ||
      !profession ||
      !phone ||
      !gender ||
      !degree ||
      !descriptionOfEntrepreneurship
    )
      throw Error("All fields are required")
    //
    const sql = `INSERT INTO users SET ?`
    const hashedPassword = await hashPassword(password)
    const user = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      birthday,
      profession,
      phone,
      gender,
      degree,
      descriptionOfEntrepreneurship,
    }
    db.query(sql, user, (err, user: any) => {
      if (err) return res.json({ message: err.message })
      const id = user.insertId
      const sql = "SELECT * FROM users WHERE id = ?"
      db.query(sql, id, (err, result) => {
        if (err) return res.json({ message: "Internal server error" })
        res.json({ email: result[0].email, token: genToken(id) })
      })
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default createNewUser
