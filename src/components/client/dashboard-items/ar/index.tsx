"use client";
import { SolidButton } from "@/src/components/shared/buttons/solid-button";
import { Card, CardHeading, CardContent } from "@/src/components/shared/card";
import { usd } from "@/src/utils/format-numbers";
import { useState } from "react";

const arActionButtons = [
  { label: "Cur." },
  { label: "30d" },
  { label: "60d" },
  { label: "90d" },
  { label: "Total" },
];

export function ARDashboardItem() {
  const [currentActive, setuCurrentActive] = useState<number>(0);

  return (
    <Card>
      <div className="mt-4">
        <CardHeading title="A/R" />
      </div>
      <CardContent>
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold">{usd().format(171581)}</p>
        </div>
        <div className="flex gap-2 pb-2">
          {arActionButtons.map((button, index) => (
            <SolidButton
              onClick={() => setuCurrentActive(index)}
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
