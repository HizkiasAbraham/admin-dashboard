import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { LineChart } from "@/src/components/shared/charts/line-chart";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { SearchInput } from "@/src/components/shared/inputs/searchInput";
import { usd } from "@/src/utils/format-numbers";
import { RateTableProp } from "./types";
import { lineChartData } from "@/src/mockups/chart";

export function RateTable(props: RateTableProp) {
  const { data } = props;

  return (
    <Card>
      <CardHeading title="Rate table">
        <SearchInput width="w-64" placeHolder="Search..." />
        <DatePicker width="w-64" />
      </CardHeading>
      <CardContent>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1 overflow-x-scroll md:overflow-x-hidden w-full">
            <div className="mt-4 flex w-max md:w-full">
              <div className="w-4/5 flex w-full gap-1 p-2 pl-6">
                <div className="w-full flex justify-start">
                  <p className="text-xs text-grey">VDER Stack</p>
                </div>
                <div className="w-full flex justify-center pr-8">
                  <p className="text-xs text-grey">Residential</p>
                </div>
                <div className="w-full flex justify-end pr-4">
                  <p className="text-xs text-grey">Small Cml</p>
                </div>
                <div className="w-full flex justify-end pr-4">
                  <p className="text-xs text-grey">Large Cml</p>
                </div>
              </div>
              <div className="flex w-64 gap-1 p-2 pr-8">
                <div className="w-full flex justify-center">
                  <p className="text-xs text-grey">Blended Rate</p>
                </div>
              </div>
            </div>
            {data?.map((row: any, index) => (
              <div key={index} className="flex w-max md:w-full">
                <div className="w-4/5 flex w-full gap-1 p-2">
                  <div className="rounded-xl w-full bg-white-smoke flex gap-2 cursor-pointer">
                    <div className="w-full flex justify-start items-center p-4">
                      <p className="font-bold text-black text-sm">
                        {row?.vrdeStack}
                      </p>
                    </div>
                    <div className="w-full flex justify-end items-center p-4">
                      <p className="font-medium text-black text-sm">
                        {row?.residential
                          ? usd(5).format(row?.residential)
                          : "-"}
                      </p>
                    </div>
                    <div className="w-full flex justify-end items-center p-4">
                      <p className="font-medium text-black text-sm">
                        {row?.smallCml ? usd(5).format(row?.smallCml) : "-"}
                      </p>
                    </div>
                    <div className="w-full flex justify-end items-center p-4 pr-8">
                      <p className="font-medium text-black text-sm">
                        {row?.largeCml ? usd(5).format(row?.largeCml) : "-"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-64 flex gap-1 p-2 justify-end">
                  <div className="rounded-xl w-full bg-dark-grey flex gap-2 cursor-pointer justify-end">
                    <div className="w-full flex justify-center items-center p-4">
                      <p className="font-bold text-purple text-sm">
                        {row?.blendedRate
                          ? usd(5).format(row?.blendedRate)
                          : "-"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <LineChart
              height="full"
              data={lineChartData as []}
              dataKeys={["pv"]}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
