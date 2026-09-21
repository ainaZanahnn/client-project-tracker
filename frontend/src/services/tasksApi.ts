import type { Task, TaskResponse } from "../types/tasks";

const API_URL = "http://localhost:5000/api";

export async function getTasksByProject(
    projectId: number,
    status?: string,
    page: number = 1
): Promise<TaskResponse> {
const params = new URLSearchParams();
    if (status) {
        params.append("status", status);
    }

    params.append("page", String(page));

    const response = await fetch(`${API_URL}/projects/${projectId}/tasks?${params.toString()}`);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch tasks");
    }
    return response.json();
}

export async function markTaskComplete(
    projectId: number,
    taskId: number
): Promise<Task> {
const response = await fetch(`${API_URL}/projects/${projectId}/tasks/${taskId}/complete`,{method: "PATCH",});
    if (!response.ok) {
        const error = await response.json();

        throw new Error(
            error.message || "Failed to mark task as complete"
        );
    }
    return response.json();
}


