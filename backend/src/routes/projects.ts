import { Router } from "express";
import { getProjects, createProject, updateProject, deleteProject } from "../controllers/projects";
import { validateProject, validateId } from "../middleware/validation";

const router = Router();

router.get("/", getProjects);
router.post("/", validateProject, createProject);
router.put("/:id", validateId, validateProject, updateProject);
router.delete("/:id", validateId, deleteProject);

export default router;