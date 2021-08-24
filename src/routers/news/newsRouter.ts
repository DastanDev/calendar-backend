import { Router } from "express"
import createNews from "../../controllers/news/createNews"
import deleteNews from "../../controllers/news/deleteNews"
import getAllNews from "../../controllers/news/getAllNews"
import getOneNews from "../../controllers/news/getOneNews"
import updateNews from "../../controllers/news/updateNews"
const newsRouter = Router()

// /api/news
newsRouter.get("/get", getAllNews)
newsRouter.get("/get/:id", getOneNews)
newsRouter.delete("/delete/:id", deleteNews)
newsRouter.post("/create", createNews)
newsRouter.put("/update/:id", updateNews)

export default newsRouter
