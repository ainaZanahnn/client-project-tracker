import { Request, Response } from "express";
import * as projectService from "../services/projects";

export async function getProjects(req: Request, res: Response) {
    const projects = await projectService.getProjects();
    
    res.status(200).json(projects);
}