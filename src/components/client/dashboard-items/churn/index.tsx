"use client";
import { SolidButton } from "@/src/components/shared/buttons/solid-button";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { useState } from "react";
import { DashboardItemProps } from "../types";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";
import { useUpdateDashboardItem } from "@/src/hooks/useUpdateDashboardItem";

export function Churn(props: DashboardItemProps) {
  const [currentActive, setCurrentActive] = useState<number>(0);
  const { data, loading, setQueryPeriod } = useUpdateDashboardItem(
    props.data,
    props.dashboardType
  );
  const churnActionButtons = [
    {
      label: "Customer #",
      value: `${data?.churn_rate_customer?.toFixed(2)}%`,
    },
    { label: "kWdc", value: `${data?.churn_rate_kwh?.toFixed(2)} kWdc` },
    // { label: "Project%" },
  ];

  return (
    <Card>
      {loading && <IndeterminateProgress />}
      <CardHeading title="Churn">
        <DatePicker width="w-40 md:w-64" onDatePicked={setQueryPeriod} />
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold">
            {churnActionButtons[currentActive].value}
          </p>
        </div>
        <div className="flex gap-2 pb-2">
          {churnActionButtons.map((button, index) => (
            <SolidButton
              onClick={() => setCurrentActive(index)}
              key={index}
              bg={currentActive === index ? "yellow" : ""}
            >
              {" "}
              {button.label}
            </SolidButton>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
