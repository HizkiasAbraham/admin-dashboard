import { OutlinedButton } from "@/src/components/shared/buttons/outlined-button";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { SocialEnergyCreditUsageTableProps } from "./types";
import { Icon } from "@/src/components/shared/icon";
import { usd } from "@/src/utils/format-numbers";
import { Paginator } from "@/src/components/shared/paginator";

export function SolarEnergyCreditsUsageHistory(
  props: SocialEnergyCreditUsageTableProps
) {
  const { data } = props;
  return (
    <div className="w-max md:w-full">
      <Card>
        <CardHeading title="Solar Energy credits usage history">
          <div className="w-64 flex justify-end">
            <OutlinedButton color="green">Export .csv</OutlinedButton>
          </div>
        </CardHeading>
        <CardContent>
          <div className="w-full mt-4">
            <div className="flex w-full gap-1">
              <div className="flex-1 text-grey text-xs">
                <p className="pl-2">#</p>
              </div>
              <div className="flex-1 w-full text-grey text-xs">
                EnergyCredits (kWh)
              </div>
              <div className="flex-1 w-full text-grey text-xs">
                Utility Bill Offset($)
              </div>
              <div className="flex-1 w-full text-grey text-xs">
                Your Discount (%)
              </div>
              <div className="flex-1 w-full text-grey text-xs">
                Your Net Savings
              </div>
              <div className="flex-1 w-full text-grey text-xs">
                Avoided Co2 (Ibs)
              </div>
              <div className="flex-1 w-full text-grey text-xs">
                Billing Period
              </div>
            </div>
          </div>
          <div className="mt-2">
            {data?.map((d: any, i) => (
              <div
                key={i}
                className="rounded w-full rounded bg-white-smoke flex gap-1 items-center mt-2 mb-2 text-black text-sm font-medium"
              >
                <div className="w-full pt-3 pb-3">
                  <p className="pl-2">{i + 1}</p>
                </div>
                <div className="w-full">{d?.energyCredits}</div>
                <div className="w-full">
                  {usd(2).format(d.utilityBillOffset)}
                </div>
                <div className="w-full">{d.yourDiscount}%</div>
                <div className="w-full">{usd(2).format(d.yourNetSavings)}</div>
                <div className="w-full">{d.avoidedCO2Ibs}</div>
                <div className="w-full">{d.billingPeriod}</div>
              </div>
            ))}
          </div>
          <div className="m-2 mt-4">
            <Paginator
              alignment="center"
              currentPage={1}
              numberOfRowsPerPage={6}
              total={100}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
