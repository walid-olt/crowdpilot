import Projects from "../components/ProjectsHeader.tsx";
import ProjectsTableContent from "../components/ProjectsTableContent.tsx";
import ProjectDeleteDialogue from "../components/ProjectDeleteDialogue.tsx";
import QueryContainer from "@/components/QueryContainer.tsx";
import Error from "@/components/Error.tsx";
const ProjectsPage = () => {
  return (
    <main className="px-4">
      <Projects />
      <QueryContainer
        loadingMessage="Loading projects"
        errorFallback={(props) => <Error {...props} />}
      >
        <ProjectsTableContent />

        <ProjectDeleteDialogue />
      </QueryContainer>
    </main>
  );
};

export default ProjectsPage;
