import { Router } from "express";
import { getProjects, createProject, updateProject } from "../controllers/projects";
import { validateProject, validateId } from "../middleware/validation";

const router = Router();

router.get("/", getProjects);
router.post("/", validateProject, createProject);
router.put("/:id", validateId, validateProject, updateProject);

export default router;