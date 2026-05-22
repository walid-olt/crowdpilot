import { useAppDispatch } from "@/store/hooks";
import { openDeleteDialogue } from "../projectsSlice.ts";
import { useMutation } from "@tanstack/react-query";
export const useMarkProjectToDelete = (
  ...args: Parameters<typeof openDeleteDialogue> // some typescript voodoo to extract the type of the argument of openDeleteDialogue
) => {};
