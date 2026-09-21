import * as taskRepository from "../repositories/tasks";

export async function getTasksByProject(projectId: number, status: string | null, page: number, limit: number) {
  return taskRepository.findByProject(projectId, status,page,limit);
}

export async function markTaskComplete(projectId: number, taskId: number) {
  return taskRepository.markComplete(projectId, taskId);
}