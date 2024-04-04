"use client";
import { ProjectsTable } from "@/src/components/client/tables/projects-table";
import { projects } from "@/src/mockups/projects";
import { getDashboardData } from "@/src/utils/http-requests/client";
import { useEffect, useState } from "react";

export default function Projets() {
  const [data, setData] = useState<any>();
  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      const result = await getDashboardData();
      // const jsonData = await result.json();
      // setData(jsonData.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <div className="mt-3 w-full overflow-x-scroll md:overflow-x-hidden">
      {data && (
        <ProjectsTable
          data={data.projects.map((d: any) => ({
            ...projects[0],
            name: d.name,
            address: d.address,
            state: d.state,
            utility: d.utility,
            kwcSize: d.capacityKwDc,
            kwhProduction: d.p50kWh,
            revenue: {
              current: d.kpis?.[0]?.revenue || 0,
              diffAmount: 0,
              diff: 0,
            },
            subscription: {
              current: d.kpis?.[0]?.subscription || 0,
              diff: 0,
            },
            allocation: {
              current: d.kpis?.[0]?.allocation || 0,
              diff: 0,
            },
            creditRate: {
              current: d.kpis?.[0]?.creditRate || 0,
              diff: 0,
            },
            churn: {
              current: d.churn_rate_kwh || 0,
              diff: 0,
            },
          }))}
        />
      )}
    </div>
  );
}
