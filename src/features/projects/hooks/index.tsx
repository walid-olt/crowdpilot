import { useAppDispatch } from "@/store/hooks";
import { closeDeleteDialogue, openDeleteDialogue } from "../projectsSlice.ts";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject } from "../api/index.ts";

export function useProjectDeleteDialogue(
  project: Parameters<typeof openDeleteDialogue>[0],
) {
  const dispatch = useAppDispatch();
  const open = () => dispatch(openDeleteDialogue(project));
  const close = () => dispatch(closeDeleteDialogue());
  return { open, close };
}

export function useDeleteProjectMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteProject(id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["projects"] }); // invalidating a cache just like this feels illegal 😭
    },
  });
}
