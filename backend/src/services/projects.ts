import * as projectRepository from "../repositories/projects";

export async function getProjects() {
    return await projectRepository.findAll();
}