import Projects from "./components/ProjectsHeader.tsx";
import Container from "./components/Container.tsx";
import ProjectsTableContent from "./components/ProjectsTableContent.tsx";
const ProjectsPage = () => {
  return (
    <main className="px-4">
      <Projects />
      <Container>
        <ProjectsTableContent />
      </Container>
    </main>
  );
};

export default ProjectsPage;
