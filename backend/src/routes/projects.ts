import { Router } from "express";
import { getProjects, createProject } from "../controllers/projects";
import { validateProject } from "../middleware/validation";

const router = Router();

router.get("/", getProjects);
router.post("/", validateProject, createProject);

export default router;