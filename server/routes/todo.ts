import { Router } from 'express'
import * as db from "../db/index"
const router = Router()


router.get("/", async (req, res, next) => {
  try {
    const tasks = await db.getAllTasks()

    res.json(tasks)
  } catch (e) {
    next(e)
  }
  
})

router.patch("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const updatedTask = req.body
    const updateTask = await db.updateTask(updatedTask, id)
    res.status(200).json({ updated: updateTask })
  } catch (e) {
    next(e)
  }
  
})


router.post("/", async (req, res, next) => {
  try {
    const createTask = req.body
    const creatingTask = await db.addTask(createTask)
    res.status(200).json({ created: creatingTask })
  } catch (e) {
    next(e)
  }
  
})

export default router