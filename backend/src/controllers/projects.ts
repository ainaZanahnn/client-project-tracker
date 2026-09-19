import { Request, Response } from "express";
import * as projectService from "../services/projects";

export async function getProjects(req: Request, res: Response) {
    const projects = await projectService.getProjects();

    res.status(200).json(projects);
}

export async function createProject(req: Request, res: Response) {
    const { name, clientName, status, startDate } = req.body;

    res.status(201).json(await projectService.createProject({ name, clientName, status, startDate }));
}