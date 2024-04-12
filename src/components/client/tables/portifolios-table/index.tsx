"use client";

import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { usd } from "@/src/utils/format-numbers";
import { useRouter } from "next/navigation";
import { PortfoliosTableInput, TableRowInput } from "./types";
import { useEffect, useState } from "react";
import { getPortfolios } from "@/src/utils/http-requests/client";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";

export function PortifoliosTable(props: PortfoliosTableInput) {
  const { data: initialData } = props;
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<string>("");

  const router = useRouter();

  const navigate = (id: string) => router.push("/client/portifolios/" + id);

  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      const result = await getPortfolios(billingPeriod);
      setData(result?.data?.portfolios);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    if (billingPeriod) {
      fetchPortfolios();
    }
  }, [billingPeriod]);

  return (
    <Card>
      {loading && <IndeterminateProgress />}
      <CardHeading title="Protifolios">
        <DatePicker width="w-48" onDatePicked={setBillingPeriod} />
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-2">
          <TableHeader />
          {data?.map((row, index) => (
            <TableBody key={index} row={row} navigate={navigate} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function TableHeader() {
  return (
    <div className="flex w-full gap-1 w-full">
      <div className="w-full flex justify-start">
        <p className="text-xs text-grey pl-4">Name </p>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-xs text-grey">Size kWdc </p>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-xs text-grey"># of projects </p>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-xs text-grey">Revenue </p>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-xs text-grey">A/R </p>
      </div>
    </div>
  );
}

function TableBody(props: TableRowInput) {
  const { row, navigate } = props;
  return (
    <div
      className="rounded-xl bg-white-smoke hover:bg-yellow mt-2 mb-2 gap-2 cursor-pointer w-full"
      onClick={() => navigate(row?._id)}
    >
      <div className="flex p-4">
        <div className="w-full flex justify-start items-center">
          <p className="font-bold text-black text-sm">{row?.name}</p>
        </div>
        <div className="w-full flex justify-center items-center">
          <p className="font-medium text-black text-sm">
            {row?.kpiData?.totalP50kWh?.toLocaleString("en-US")}
          </p>
        </div>
        <div className="w-full flex justify-center items-center border-l-2 border-r-2 border-inactive">
          <p className="font-medium text-black text-sm">
            {row?.kpiData?.numberOfProjects?.toLocaleString("en-US")}
          </p>
        </div>
        <div className="w-full flex justify-center items-center border-inactive">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-black text-sm">
              {usd(2).format(row?.kpiData?.revenue || 0)}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-black text-sm pl-6">
              {usd().format(row?.kpiData?.ar || 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
