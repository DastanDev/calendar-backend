import express from "express"
import createNewUser from "../../controllers/user/createUser"
import getAllUsers from "../../controllers/user/getAllUsers"
import getUserDetails from "../../controllers/user/getUserDetails"
import loginUser from "../../controllers/user/loginUser"
import updateUser from "../../controllers/user/updateUser"
const userRouter = express.Router()

// /user
userRouter.post("/login", loginUser)
userRouter.post("/register", createNewUser)
userRouter.get("/my/:id", getUserDetails)
userRouter.put("/update/:id", updateUser)
userRouter.get("/getAll", getAllUsers)

export default userRouter
