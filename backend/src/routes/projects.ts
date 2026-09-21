import { Router } from "express";
import { getProjects, createProject, updateProject, deleteProject } from "../controllers/projects";
import { validateProject, validateId, validateTask } from "../middleware/validation";
import { getTasksByProject, markTaskComplete } from "../controllers/tasks";

const router = Router();

//route for project
router.get("/", getProjects);
router.post("/", validateProject, createProject);
router.put("/:id", validateId("id"), validateProject, updateProject);
router.delete("/:id", validateId("id"), deleteProject);

//route for tasks
router.get("/:projectId/tasks",validateId("projectId"), validateTask, getTasksByProject);

router.patch("/:projectId/tasks/:taskId/complete", validateId("projectId"), validateId("taskId"), markTaskComplete);

export default router;