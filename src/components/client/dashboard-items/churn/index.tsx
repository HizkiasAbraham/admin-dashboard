"use client";
import { SolidButton } from "@/src/components/shared/buttons/solid-button";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { useState } from "react";
import { DashboardItemProps } from "../types";

export function Churn(props: DashboardItemProps) {
  const [currentActive, setCurrentActive] = useState<number>(0);
  const { project } = props;

  const churnActionButtons = [
    { label: "Customer #", value: `${project?.churn_rate_customer?.toFixed(2)}%` },
    { label: "kWdc", value:`${project?.churn_rate_kwh?.toFixed(2)} kWdc` },
    // { label: "Project%" },
  ];
console.log("the project", project)
  return (
    <Card>
      <CardHeading title="Churn">
        <DatePicker width="w-48" />
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
