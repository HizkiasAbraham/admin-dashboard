import { Card } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";
import Image from "next/image";

export function UtilityReports() {
  return (
    <div className="w-full">
      <Card>
        <div className="flex items-center mt-5">
          <div className="flex flex-1 items-center gap-2">
            <p className="font-semibold text-grey text-baseline">
              UTILITY REPORTS
            </p>{" "}
          </div>
        </div>
        <div className="mt-4">
          {["Host Report", "Credit Report"].map((report) => (
            <div key={report} className="bg-light-grey rounded-lg mt-12 cursor-pointer">
              <div className="p-4 flex">
                <div className="flex-1 flex">
                  <div className="flex-1 flex items-center justify-between ">
                    <div className="flex items-center gap-4">
                      <Image
                        alt=""
                        width={35}
                        height={40}
                        src={"/images/google-drive.png"}
                      />
                      <p className="font-semibold text-lg">{report}</p>
                    </div>
                    <Icon.ArrowRight className="text-green w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas itaque culpa accusamus possimus ad dolores numquam
                  omnis illum laudantium facere aliquid natus, ducimus esse
                  minus eaque obcaecati alias quia mollitia.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
