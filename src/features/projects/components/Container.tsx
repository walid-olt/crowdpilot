import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { Suspense } from "react";
type Props = {
  children: React.ReactNode;
};
const ProjectsContainer = ({ children }: Props) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Error error={error} resetErrorBoundary={resetErrorBoundary} />
          )}
        >
          <Suspense fallback={<Loading message="Loading projects" />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ProjectsContainer;
