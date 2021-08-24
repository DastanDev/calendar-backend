import express from "express"
import createNewUser from "../../controllers/user/createUser"
import getAllUsers from "../../controllers/user/getAllUsers"
import getUserDetails from "../../controllers/user/getUserDetails"
import loginUser from "../../controllers/user/loginUser"
import updateUser from "../../controllers/user/updateUser"
import adminAuth from "../../middleware/adminAuth"
import auth from "../../middleware/auth"
const userRouter = express.Router()

// /user
userRouter.post("/login", loginUser)
userRouter.post("/register", createNewUser)
userRouter.put("/update", auth, updateUser)
userRouter.get("/getAll", getAllUsers)
userRouter.get("/my/profile", auth, adminAuth, getUserDetails)

export default userRouter
