import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import type { Project } from "@/types/api";
import { useProjectDeleteDialogue } from "../hooks/index.tsx";

type Props = {
  project: Project;
};

const ProjectActions = ({ project }: Props) => {
  const { open } = useProjectDeleteDialogue(project);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="*:cursor-pointer">
        <DropdownMenuItem>view details</DropdownMenuItem>
        <DropdownMenuItem>edit project</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={open}>
          delete project
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectActions;
