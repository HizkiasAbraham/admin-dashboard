"use client";
import { SolidButton } from "@/src/components/shared/buttons/solid-button";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { useState } from "react";

const churnActionButtons = [
  { label: "Customer #" },
  { label: "kWdc" },
  { label: "Project%" },
];

export function Churn() {
  const [currentActive, setCurrentActive] = useState<number>(0);

  return (
    <Card>
      <CardHeading title="Churn">
        <DatePicker width="w-48" />
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold">213</p>
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
