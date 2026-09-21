import { useState } from "react";
import "./App.css";

import ProjectsPage from "./pages/projectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  if (selectedProjectId !== null) {
    return (
      <ProjectDetailPage
        projectId={selectedProjectId}
      />
    );
  }

  return (
    <ProjectsPage onProjectClick={setSelectedProjectId}/>
  );
}

export default App;