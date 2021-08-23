import { Handler } from "express"
import UserModel from "../../models/UserModel"

const getUserDetails: Handler = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default getUserDetails
