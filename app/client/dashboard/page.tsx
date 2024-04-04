"use client";
import { ProjectMap } from "@/src/components/client/dashboard-items/project-map";
import { PortifoliosTable } from "@/src/components/client/tables/portifolios-table";
import { ProjectsTable } from "@/src/components/client/tables/projects-table";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";
import { projects } from "@/src/mockups/projects";
import { portifiolios } from "@/src/mockups/protfolios";
import { getDashboardData } from "@/src/utils/http-requests/client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const result = await getDashboardData();
      setData(result.data);
      setLoading(false);
    } catch (error) {
      setError("Error while loading dashboard data");
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return loading ? (
    <IndeterminateProgress />
  ) : (
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
                numberOfProjects: d.projects.length,
              }))}
            />
          )}
        </div>
      </div>
      <div className="mt-3 w-full overflow-x-scroll md:overflow-x-hidden">
        {data && <ProjectsTable data={data.projects} />}
      </div>
    </>
  );
}
