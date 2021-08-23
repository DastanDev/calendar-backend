import { Handler } from "express"
import UserModel, { matchPassword } from "../../models/UserModel"

const updateUser: Handler = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default updateUser
