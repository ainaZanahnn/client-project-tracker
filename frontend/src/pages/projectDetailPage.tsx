import { useEffect, useState } from "react";
import type { Task } from "../types/tasks";
import { getTasksByProject,  markTaskComplete,} from "../services/tasksApi";
import TaskTable from "../components/TasksTable";

interface ProjectDetailPageProps {
    projectId: number;
}

export default function ProjectDetailPage({
    projectId,
}: ProjectDetailPageProps) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [status, setStatus] = useState("");


    useEffect(() => {
    async function loadTasks() {
      try {
        const result = await getTasksByProject(
          projectId, status || undefined
        );

        setTasks(result.data);
      } catch {
        setError("Failed to load tasks");
      } finally {
         setLoading(false);
      }
    }

    loadTasks();
  },[projectId, status]);

    async function handleMarkComplete(taskId: number) {
    try {
        setError("");
        await markTaskComplete(projectId, taskId);
        
        const result = await getTasksByProject(projectId, status || undefined);
        setTasks(result.data);
    } catch {
        setError("Failed to mark task as complete");
    }}


  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
        <h1>Project Tasks</h1>

        <div className="status-filter">
        <label htmlFor="task-status">Filter by status:</label>

        <select id="task-status" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="">All</option>
            <option value="NOT_STARTED">Not Started</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
        </select>
        </div>

        <TaskTable tasks={tasks} onMarkComplete={handleMarkComplete}/>
    </div>
    );
}