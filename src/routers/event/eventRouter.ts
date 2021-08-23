import { Router } from "express"
import createEvent from "../../controllers/event/createEvent"
import deleteEvent from "../../controllers/event/deleteEvent"
import getAllEvents from "../../controllers/event/getAllEvents"
import getOneEvent from "../../controllers/event/getOneEvent"
import updateEvent from "../../controllers/event/updateEvent"
import updateUser from "../../controllers/user/updateUser"
const eventRouter = Router()

// /event
eventRouter.get("/getAll", getAllEvents)
eventRouter.get("/:id", getOneEvent)
eventRouter.delete("/:id", deleteEvent)
eventRouter.post("/create", createEvent)
eventRouter.put("/update/:id", updateEvent)

export default eventRouter
