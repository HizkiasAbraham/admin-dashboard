"use client";
import { ProjectMap } from "@/src/components/client/dashboard-items/project-map";
import { PortifoliosTable } from "@/src/components/client/tables/portifolios-table";
import { ProjectsTable } from "@/src/components/client/tables/projects-table";
import { projects } from "@/src/mockups/projects";
import { portifiolios } from "@/src/mockups/protfolios";
import { getDashboardData } from "@/src/utils/http-requests/client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState<any>();
  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      const result = await getDashboardData();
      const jsonData = await result.json();
      setData(jsonData.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <ProjectMap />
        </div>
        <div className="flex-1 w-full overflow-x-scroll md:overflow-x-hidden">
          {data && (
            <PortifoliosTable
              data={data.portfolios.map((d: any) => ({
                ...portifiolios[0],
                name: d.name,
                numberOfProjects: d.projects.length
              }))}
            />
          )}
        </div>
      </div>
      <div className="mt-3 w-full overflow-x-scroll md:overflow-x-hidden">
        {data && (
          <ProjectsTable
            data={data.projects.map((d: any) => ({
              ...projects[0],
              name: d.name,
              address: d.address,
              state: d.state,
              utility: d.utility,
              // kwcSize: d.capacityKwDc,
            }))}
          />
        )}
      </div>
    </>
  );
}
