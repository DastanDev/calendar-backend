import { Router } from "express"
import createEvent from "../../controllers/event/createEvent"
import deleteEvent from "../../controllers/event/deleteEvent"
import getAllEvents from "../../controllers/event/getAllEvents"
import getOneEvent from "../../controllers/event/getOneEvent"
import updateEvent from "../../controllers/event/updateEvent"
const eventRouter = Router()

// /event
eventRouter.get("/get", getAllEvents)
eventRouter.get("/get/:id", getOneEvent)
eventRouter.delete("/delete/:id", deleteEvent)
eventRouter.post("/create", createEvent)
eventRouter.put("/update/:id", updateEvent)

export default eventRouter
