import { Card, CardContent } from "@/src/components/shared/card";
import { DashboardItemProps } from "../types";

export function SubscribedAllocated(props: DashboardItemProps) {
  const { data } = props;
  const Green = () => <div className="w-4 bg-green rounded h-full"></div>;
  const Yellow = () => <div className="w-4 bg-yellow rounded h-full"></div>;

  return (
    <Card>
      <CardContent>
        <div className="flex gap-2 w-full mt-5">
          <div className="w-1/3 flex flex-col gap-2">
            <div className="bg-white-smoke rounded-xl">
              <div className="p-2 flex flex-col">
                <div className="w-full border-l-2 border-green flex">
                  <p className="font-bold text-sm text-black ml-1">
                    {data?.kpiData?.subscription?.toFixed(2) || 0}%
                  </p>
                </div>
                <p className="font-medium text-xs text-grey mt-1">Subscribed</p>
              </div>
            </div>
            <div className="bg-white-smoke rounded-xl">
              <div className="p-2 flex flex-col">
                <div className="w-full border-l-2 border-yellow flex">
                  <p className="font-bold text-sm text-black ml-1">
                    {data?.kpiData?.allocation?.toFixed(2) || 0}%
                  </p>
                </div>
                <p className="font-medium text-xs text-grey mt-1">Allocated</p>
              </div>
            </div>
          </div>
          <div className="w-2/3 flex flex-col gap-2 ">
            <div className="flex-1 flex gap-2 items-center justify-center">
              {[...new Array(10)].map((val) => (
                <Green key={val} />
              ))}
            </div>
            <div className="flex-1 flex gap-2 items-center justify-center">
              {[...new Array(10)].map((val) => (
                <Yellow key={val} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
