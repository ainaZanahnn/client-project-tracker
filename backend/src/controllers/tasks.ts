import { Request, Response } from "express";
import * as taskService from "../services/tasks";

export async function getTasksByProject(req: Request, res: Response) {
    const projectId = Number(req.params.projectId);
    const status = typeof req.query.status === "string" ? req.query.status : null;
    const page = typeof req.query.page === "string" ? parseInt(req.query.page) : 1;
    const limit = 10;
    
    const result = await taskService.getTasksByProject(projectId, status, page, limit);

    res.status(200).json({
        data: result.tasks,
        pagination: {
            page,
            limit,
            total: result.total,
            totalPages: Math.ceil(result.total / limit)
        }
    })
}

export async function markTaskComplete(req: Request, res: Response) {
  const projectId = Number(req.params.projectId);
  const taskId = Number(req.params.taskId);

  const task = await taskService.markTaskComplete(projectId, taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  res.status(200).json(task);
}