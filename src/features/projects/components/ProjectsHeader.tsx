import { List as ListIcon } from "lucide-react";
import { Item, ItemMedia, ItemTitle } from "@/components/ui/item";
const ProjectsHeader = () => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <Item>
          <ItemMedia variant="icon">
            <ListIcon className="size-full" />
          </ItemMedia>
          <ItemTitle className="text-2xl font-bold">
            <h1>Projects</h1>
          </ItemTitle>
        </Item>
      </div>
    </section>
  );
};

export default ProjectsHeader;
