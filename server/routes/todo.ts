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
    // const task = String(req.body)
    // const completed = Boolean(req.body)
    // const taskObj = {
    //   id,
    //   task,
    //   completed
    // }
    const updateTask = await db.updateTask(updatedTask, id)
    res.status(200).json({ updated: updateTask })
  } catch (e) {
    next(e)
  }
  
})

export default router