import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { Suspense } from "react";
type Props = {
  children: React.ReactNode;
};
/**
 * This is a wrapper component that handles loading and error states
 * for its children using React Suspense and error boundaries.
 *
 * - Displays a loading indicator while children are being loaded.
 * - Catches errors in child components and displays a fallback error UI.
 * - Integrates with React Query's error reset boundary for retry logic.
 */
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
