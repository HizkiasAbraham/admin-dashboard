"use client";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { Carousel } from "@/src/components/shared/crousel";
import { TabSelector } from "@/src/components/shared/tab-selector";
import { crouselItems } from "@/src/mockups/crousel-items";
import { useState } from "react";
import { ProjectDetailProps } from "./types";
import moment from "moment";

const tabViewItems = [
  { id: "photo", label: "Site Photos" },
  { id: "map", label: "Map View" },
];

export function ProjectDetails(props: ProjectDetailProps) {
  const [currentTabViewItem, setCurrentTabviewItem] = useState(
    tabViewItems[0].id
  );
  const { project } = props;
  const getTabItems = (): any => ({
    photo: <Carousel items={crouselItems} autoSlide={false} />,
    map: (
      <div className="flex justify-center items-center">Map data goes here</div>
    ),
  });

  return (
    <Card>
      <CardHeading title="Project Details">
        <div className="invisible md:visible w-full">
          <TabSelector
            items={tabViewItems}
            selectedItem={currentTabViewItem}
            onTabItemChanged={setCurrentTabviewItem}
          />
        </div>
      </CardHeading>
      <CardContent>
        <div className="flex flex-col md:flex-row mt-4 gap-5">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">Name</p>
                  <p className="font-medium text-black text-sm">{project?.name}</p>
                </div>
              </div>
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">Credit Type</p>
                  <p className="font-medium text-black text-sm">{project?.creditType}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6 flex-col md:flex-row">
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">Address</p>
                  <p className="font-medium text-black text-sm">
                    {project?.address}
                  </p>
                </div>
              </div>
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">
                    Project Subscriber Discount
                  </p>
                  <p className="font-medium text-black text-sm">5%</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6 flex-col md:flex-row">
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">Utility</p>
                  <p className="font-medium text-black text-sm">{project?.utility}</p>
                </div>
              </div>
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">COD Date</p>
                  <p className="font-medium text-black text-sm">{moment(project?.startDate).format("MMM D, YYYY")}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6 flex-col md:flex-row">
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">System Size</p>
                  <p className="font-medium text-black text-sm">{project?.capacityKwDc?.toLocaleString("en-us")} kWdc</p>
                </div>
              </div>
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">
                    Estimated P50 Production
                  </p>
                  <p className="font-medium text-black text-sm">
                    {project.p50kWh?.toLocaleString("en-us")} kWh
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <div className="md:hidden">
                <TabSelector
                  items={tabViewItems}
                  selectedItem={currentTabViewItem}
                  onTabItemChanged={setCurrentTabviewItem}
                />
              </div>
              <div className="mt-2 mb-2">
                {getTabItems()[currentTabViewItem]}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
