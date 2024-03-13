import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { LineChart } from "@/src/components/shared/charts/line-chart";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import {
  BankedCreditRowInput,
  BankedCreditsInput,
  TableHeaderInput,
} from "./types";
import { lineChartData } from "@/src/mockups/chart";

export function BankedCredits(props: BankedCreditsInput) {
  const { hostBankCredits, customerBankCredits } = props;
  return (
    <Card>
      <CardHeading title="Banked Credits">
        <DatePicker />
      </CardHeading>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="md:w-1/3">
            {/* Host bank */}
            <div className="mt-4 border-b-2 pb-4 border-inactive">
              <TableHeader label="Host Bank Credits" />
              {hostBankCredits.map((row, index) => (
                <TableRow key={index} row={row} />
              ))}
            </div>
            <div className="mt-6">
              <TableHeader label="Customer Bank Credits" />
              {customerBankCredits.map((row, index) => (
                <TableRow key={index} row={row} />
              ))}
            </div>
          </div>
          <div className=" md:w-2/3">
            <LineChart
              data={lineChartData as []}
              height="full"
              dataKeys={["pv", "uv"]}
            />
          </div>
        </div>

        {/* <TableHeader label="Customer Bank Credits" /> */}
      </CardContent>
    </Card>
  );
}

function TableHeader(props: TableHeaderInput) {
  const { label } = props;
  return (
    <div className="flex w-full gap-1">
      <div className="w-full flex justify-start pl-3">
        <p className="text-xs text-grey">{label}</p>
      </div>
      <div className="w-full flex justify-end pr-3">
        <p className="text-xs text-grey">Value </p>
      </div>
    </div>
  );
}

function TableRow(props: BankedCreditRowInput) {
  const { row } = props;

  return (
    <div className="rounded-xl bg-white-smoke mt-2 mb-2 gap-2 cursor-pointer">
      <div className="flex p-3">
        <div className="w-full flex flex-1 justify-start items-center">
          <p className="font-medium text-sm">{row?.label}</p>
        </div>
        <div className="flex-1"></div>
        <div className="w-full flex flex-1 justify-end items-center border-l-2 border-inactive">
          <p className="font-medium text-sm"> {row?.value}</p>
        </div>
      </div>
    </div>
  );
}
