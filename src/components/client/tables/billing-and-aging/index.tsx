import { OutlinedButton } from "@/src/components/shared/buttons/outlined-button";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { DatePicker } from "@/src/components/shared/inputs/date-picker";
import { usd } from "@/src/utils/format-numbers";
import { BillingAndAgingInput, BillingRowInput } from "./types";
import { useProjectDetail } from "@/src/hooks/useProjectDetail";
import { IndeterminateProgress } from "@/src/components/shared/indeterminate-progress";

export function BillingAndAging(props: BillingAndAgingInput) {
  const { data: initialData, itemId } = props;

  const { data, loading, setBillingPeriod } = useProjectDetail(
    initialData,
    itemId,
    "billing-and-aging",
    "billingAndAgingData"
  );

  return (
    <Card>
      {loading && <IndeterminateProgress />}
      <CardHeading title="Billing and Aging">
        <DatePicker width="w-48" onDatePicked={setBillingPeriod} />
        <OutlinedButton color="green">Export .csv</OutlinedButton>
      </CardHeading>
      <CardContent>
        <div className="mt-3 w-full overflow-x-scroll md:overflow-x-hidden">
          <div className="mt-4 flex w-full">
            <div className="w-4/5 flex w-full gap-1 p-2 pl-6">
              <div className="w-full flex justify-start">
                <p className="text-xs text-grey">Type</p>
              </div>
              <div className="w-full flex justify-end pr-8">
                <p className="text-xs text-grey">Gross</p>
              </div>
              <div className="w-full flex justify-end pr-4">
                <p className="text-xs text-grey">Subscriber Discount</p>
              </div>
              <div className="w-full flex justify-end pr-8">
                <p className="text-xs text-grey">Payment Process Fees</p>
              </div>
            </div>
            <div className="flex w-64 gap-1 p-2 pr-8">
              <div className="w-full flex justify-end">
                <p className="text-xs text-grey">Net</p>
              </div>
            </div>
          </div>
          <RowItem type="Gross Revenue" row={data?.grossRevenue} />
          <RowItem type="Collected" row={data?.collected} />
          <RowItem type="Account Receivable" row={data?.accountReceivable} />
        </div>
      </CardContent>
    </Card>
  );
}

function RowItem(props: BillingRowInput) {
  const { type, row } = props;
  return (
    <div className="flex w-full">
      <div className="w-4/5 flex w-full gap-1 p-2">
        <div className="rounded-xl w-full bg-white-smoke flex gap-2 cursor-pointer">
          <div className="w-full flex justify-start items-center p-4">
            <p className="font-bold text-black text-sm">{type}</p>
          </div>
          <div className="w-full flex justify-end items-center p-4">
            <p className="font-bold text-black text-sm">
              {usd().format(row?.gross || 0)}
            </p>
          </div>
          <div className="w-full flex justify-end items-center p-4">
            <p className="font-bold text-black text-sm">
              {usd().format(row?.subscriberDiscount || 0)}
            </p>
          </div>
          <div className="w-full flex justify-end items-center p-4 pr-8">
            <p className="font-bold text-black text-sm">
              {usd().format(row?.paymentProcessFees || 0)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-64 flex gap-1 p-2 justify-end">
        <div className="rounded-xl w-full bg-dark-grey flex gap-2 cursor-pointer justify-end">
          <div className="w-full flex justify-end items-center p-4">
            <p className="font-bold text-purple text-sm">
              {usd().format(row?.net || 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
