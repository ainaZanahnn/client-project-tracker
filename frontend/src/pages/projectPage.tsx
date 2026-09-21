import { useEffect, useState } from "react";

import type { Project } from "../types/project";
import { getProjects } from "../services/projectApi";

import ProjectTable from "../components/ProjectTable";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  if (loading) {
    return <Loading message="Loading projects..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <h1>Projects</h1>
      <ProjectTable projects={projects} />
    </div>
  );
}