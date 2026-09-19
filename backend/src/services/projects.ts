import * as projectRepository from "../repositories/projects";

export async function getProjects() {
    return await projectRepository.findAll();
}

export async function createProject(data: { name: string; clientName: string; status: string; startDate: string }) {
    return await projectRepository.create(data);
}

export async function updateProject(id: number, data: { name: string; clientName: string; status: string; startDate: string }) {
    return await projectRepository.update(id, data);
}