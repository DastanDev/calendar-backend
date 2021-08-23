import { Handler } from "express-serve-static-core"
import genToken from "../../config/genToken"
import UserModel, { matchPassword } from "../../models/UserModel"

// /user/login
// POST

const loginUser: Handler = async (req, res) => {
  try {
  
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default loginUser