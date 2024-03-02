import { Card, CardContent } from "@/components/shared/card";
import { InvoicesTableProps } from "./types";
import { OutlinedButton } from "@/components/shared/buttons/outlined-button";
import { usd } from "@/utils/format-numbers";
import { Icon } from "@/components/shared/icon";

export function InvoicesTable(props: InvoicesTableProps) {
  const { title, data } = props;
  return (
    <div className="w-max md:w-full">
      <Card>
        <CardContent>
          <div className="flex justify-between">
            <p className="text-baseline font-bold text-black">{title}</p>
            <OutlinedButton color="green">Export .csv</OutlinedButton>
          </div>
          <div className="mt-4 flex text-sm text-grey font-medium pl-3 pr-2">
            <div className="w-full">Status</div>
            <div className="w-full">Date</div>
            <div className="w-full">Balance</div>
            <div className="w-full">Applied Credits</div>
            <div className="w-full">Your Bill</div>
            <div className="w-full">Savings</div>
            <div className="w-full">Invoice</div>
          </div>
          <div className="mt-2">
            {!data && (
              <div className="rounded w-full rounded bg-white-smoke pl-2 pr-2 flex items-center">
                <div className="w-full p-2">-</div>
                <div className="w-full">-</div>
                <div className="w-full">-</div>
                <div className="w-full">-</div>
                <div className="w-full">-</div>
                <div className="w-full">-</div>
                <div className="w-full">-</div>
              </div>
            )}
            {data?.map((d: any, i) => (
              <div
                key={i}
                className="rounded w-full rounded bg-white-smoke pl-2 pr-2 flex gap-2 items-center mt-2 mb-2 text-black text-sm font-medium"
              >
                <div className="w-full pt-3 pb-3">{d?.status}</div>
                <div className="w-full">{d?.date}</div>
                <div className="w-full">{usd(2).format(d.balance)}</div>
                <div className="w-full">{usd(2).format(d.appliedCredits)}</div>
                <div className="w-full">{usd(2).format(d.yourBill)}</div>
                <div className="w-full">{usd(2).format(d.savings)}</div>
                <div className="w-full">
                  <Icon.DocumentFile className="w-5 h-6 text-green" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
