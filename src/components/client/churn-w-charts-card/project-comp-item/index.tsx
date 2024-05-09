import { ProjectComparisionProp } from "../types";

export function ProjectComparisionItem(props: ProjectComparisionProp) {
  const { item, color, margin } = props;
  return (
    <div
      className={`w-full h-full mt-${margin || "2"} mb-${
        margin || "2"
      } flex flex-col gap-2`}
    >
      <div className="flex gap-1 text-grey">
        <p>{item?.name}</p>
        {", "} <p>{item?.state}</p>
      </div>
      <div className="w-full bg-purple text-white rounded-lg flex justify-center">
        <div className=" flex gap-2">
          <p>{item?.churn_customer_count},</p>
          <p>{item?.churn_rate_kW?.toFixed(2)}kW,</p>
          <p>{item?.churn_rate_project?.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
}
