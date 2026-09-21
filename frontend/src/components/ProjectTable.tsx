import type { Project } from "../types/project";

interface ProjectTableProps {
  projects: Project[];
}

export default function ProjectTable({
  projects,
}: ProjectTableProps) {
  return (
    <div className="table-container">
      <table className="project-table">
        <thead>
          <tr>
            <th>Project</th>
            <th>Client</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>Tasks</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.clientName}</td>
              <td>{project.status}</td>
              <td>{project.startDate}</td>
              <td>{project.taskCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}