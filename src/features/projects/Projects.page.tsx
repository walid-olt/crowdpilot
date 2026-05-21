import Projects from "./components/ProjectsHeader.tsx";
import Container from "./components/Container.tsx";
import ProjectsTableContent from "./components/ProjectsTableContent.tsx";
import ProjectDeleteDialogue from "./components/ProjectDeleteDialogue.tsx";
const ProjectsPage = () => {
  return (
    <main className="px-4">
      <Projects />
      <Container>
        <ProjectsTableContent />

        <ProjectDeleteDialogue />
      </Container>
    </main>
  );
};

export default ProjectsPage;
