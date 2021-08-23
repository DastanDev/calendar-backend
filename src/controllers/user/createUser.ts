import { Handler } from "express"
import UserModel from "../../models/UserModel"

const createNewUser: Handler = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password)
      throw Error("All field required")
    const newUser = await UserModel.create(req.body)
    res.json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default createNewUser