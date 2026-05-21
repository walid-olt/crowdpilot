import { MoreHorizontalIcon, ExternalLinkIcon } from "lucide-react";
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
import Guard from "@/components/Guard.tsx";
import { useNavigate } from "react-router-dom";

type Props = {
  project: Project;
};

const ProjectActions = ({ project }: Props) => {
  const { open } = useProjectDeleteDialogue(project);
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="*:cursor-pointer">
        <DropdownMenuItem
          className="group/item"
          onClick={() => navigate(project._id)}
        >
          view details{" "}
          <ExternalLinkIcon className="group-hover/item:opacity-100 opacity-0" />
        </DropdownMenuItem>
        <DropdownMenuItem>edit project</DropdownMenuItem>
        <DropdownMenuSeparator />
        <Guard
          toolTipSide="bottom"
          when={project.status === "CLOSED"}
          reason="You can't delete a project that has been closed"
        >
          <DropdownMenuItem variant="destructive" onClick={open}>
            delete project
          </DropdownMenuItem>
        </Guard>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectActions;
