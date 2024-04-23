'use client'
import { Card, CardContent } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";
import { BreadCrumb } from "@/src/components/subscriber/bread-crumb";
import { FarmDetailAnalytics } from "@/src/components/subscriber/farm-detail";
import { SolarEnergyCredits } from "@/src/components/subscriber/solar-energy-credits";
import { SolarEnergyCreditsUsageHistory } from "@/src/components/subscriber/solar-energy-credits-usage-table";
import { TotalSavings } from "@/src/components/subscriber/total-savings";
import { solarEnergyCreditsHistory } from "@/src/mockups/solarEnergyCreditsUsage";

export default function Dashboard() {
  return (
    <div>
      <BreadCrumb pageName="Dashboard" showSearchAndUpload />
      <div className="mt-4 flex flex-col md:flex-row gap-1 md:gap-3">
        <div className="flex-1">
          <Card>
            <CardContent>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-base">$230.00</p>
                  <p className="font-medium text-xs text-grey">
                    Dollars Saved All-Time
                  </p>
                </div>
                <div className="w-12 h-12 bg-light-green rounded-lg text-green flex items-center justify-center">
                  <Icon.USD className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <CardContent>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-base">7,000</p>
                  <p className="font-medium text-xs text-grey">
                    Avoided Tons of CO2 Equivalent All-Time
                  </p>
                </div>
                <div className="w-12 h-12 bg-light-green rounded-lg text-green flex items-center justify-center">
                  <Icon.CloudIcon className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <CardContent>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-base">125</p>
                  <p className="font-medium text-xs text-grey">
                    Gallons of Gas Avoided (CO2 Equivalent)
                  </p>
                </div>
                <div className="w-12 h-12 bg-light-green rounded-lg text-green flex items-center justify-center">
                  <Icon.GallonBucket className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-3 md:mt-6 w-full">
        <Card>
          <CardContent>
            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Donati Solar Farm</p>
                  <p className="text-grey text-xs text-grey">
                    Seneca Falls, NY
                  </p>
                </div>
                <div className="mt-8">
                  <p className="text-sm font-normal">
                    Upon visual inspection, all panels appear to be free from
                    physical damage or debris accumulation. There are no visible
                    cracks, scratches, or signs of wear. The wiring and
                    connections are intact and show no signs of corrosion.
                  </p>
                </div>
                <div className="mt-14 flex flex-col gap-6 pb-8 text-xs font-medium">
                  <div className="flex-1 flex gap-2">
                    <Icon.Flash className="w-4 h-4 text-green" />{" "}
                    <p>4.16 million kWh per year</p>{" "}
                  </div>
                  <div className="flex-1 flex gap-2">
                    <Icon.GallonBucket className="w-4 h-4 text-green" />{" "}
                    <p>594 homes supporting development of local solar</p>{" "}
                  </div>
                  <div className="flex-1 flex gap-2">
                    <Icon.Home className="w-4 h-4 text-green" />{" "}
                    <p>594 homes supporting development of local solar</p>{" "}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="md:m-4 md:mt-0">
                  <FarmDetailAnalytics />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-3 flex flex-col md:flex-row gap-1 md:gap-3">
        <div className="flex-1">
          <SolarEnergyCredits />
        </div>
        <div className="flex-1">
          <TotalSavings />
        </div>
      </div>
      <div className="mt-5 w-full overflow-x-scroll md:overflow-x-hidden">
        <SolarEnergyCreditsUsageHistory
          data={solarEnergyCreditsHistory as []}
        />
      </div>
    </div>
  );
}
