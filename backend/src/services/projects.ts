import * as projectRepository from "../repositories/projects";

export async function getProjects() {
    return await projectRepository.findAll();
}

export async function createProject(data: { name: string; clientName: string; status: string; startDate: string }) {
    return await projectRepository.create(data);
}