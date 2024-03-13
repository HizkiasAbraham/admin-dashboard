import { ProjectMap } from "@/src/components/client/dashboard-items/project-map";
import { PortifoliosTable } from "@/src/components/client/tables/portifolios-table";
import { ProjectsTable } from "@/src/components/client/tables/projects-table";
import { projects } from "@/src/mockups/projects";
import { portifiolios } from "@/src/mockups/protfolios";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <ProjectMap />
        </div>
        <div className="flex-1 w-full overflow-x-scroll md:overflow-x-hidden">
          <PortifoliosTable data={portifiolios as []} />
        </div>
      </div>
      <div className="mt-3 w-full overflow-x-scroll md:overflow-x-hidden">
        <ProjectsTable data={[...projects, ...projects] as []} />
      </div>
    </>
  );
}
