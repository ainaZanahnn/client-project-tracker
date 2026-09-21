import type { Task } from "../types/tasks";

interface TaskTableProps {
    tasks: Task[];
    onMarkComplete: (taskId: number) => void;

}

export default function TaskTable({ tasks,  onMarkComplete, }: TaskTableProps) {
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
                    <td>
                    <select value={task.status} onChange={(event) => {
                        if (event.target.value === "COMPLETED") {
                            onMarkComplete(task.id);
                        }
                    }} disabled={task.status === "COMPLETED"}>
                    <option value="NOT_STARTED">Not Started</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>    
                    </select>
                    </td>
                <td>{task.assignee || "-"}</td>
                <td>{task.dueDate || "-"}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}