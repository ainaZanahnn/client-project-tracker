import { useEffect, useState } from "react";
import type { Task } from "../types/tasks";
import { getTasksByProject } from "../services/tasksApi";
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

    useEffect(() => {
    async function loadTasks() {
      try {
        const result = await getTasksByProject(projectId);
        setTasks(result.data);
      } catch {
        setError("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, [projectId]);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Project Tasks</h1>
      <TaskTable tasks={tasks} />
    </div>
  );
}