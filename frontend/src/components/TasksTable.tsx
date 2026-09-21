import type { Task } from "../types/tasks";

interface TaskTableProps {
  tasks: Task[];
}

export default function TaskTable({ tasks }: TaskTableProps) {
    return (
        <table className="task-table">
        <thead>
            <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Due Date</th>
            </tr>
        </thead>

        <tbody>
            {tasks.map((task) => (
            <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.assignee || "-"}</td>
                <td>{task.dueDate || "-"}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}