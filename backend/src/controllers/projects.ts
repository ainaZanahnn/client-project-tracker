import { Request, Response } from "express";
import * as projectService from "../services/projects";

export async function getProjects(req: Request, res: Response) {
    const projects = await projectService.getProjects();

    res.status(200).json(projects);
}

export async function createProject(req: Request, res: Response) {
    const project = await projectService.createProject(req.body);

    res.status(201).json(project);
}

export async function updateProject(req: Request, res: Response) {
    const { id } = req.params;
    const project = await projectService.updateProject(Number(id), req.body);

    if (!project) {
        return res.status(404).json({
            message: "Project not found"
        });
    }
    res.status(200).json(project);
}

export async function deleteProject(req: Request, res: Response) {
    const id = Number(req.params.id);
    const project =await projectService.deleteProject(id);

    if (!project) {
        return res.status(404).json({
            message: "Project not found"
        });
    }
    res.status(200).json();
}