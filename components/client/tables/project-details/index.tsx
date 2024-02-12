'use client';
import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { Carousel } from '@/components/shared/crousel';
import { TabSelector } from '@/components/shared/tab-selector';
import { crouselItems } from '@/mockups/crousel-items';
import { useState } from 'react';

const tabViewItems = [
  { id: 'photo', label: 'Site Photos' },
  { id: 'map', label: 'Map View' },
];

export function ProjectDetails() {
  const [currentTabViewItem, setCurrentTabviewItem] = useState(
    tabViewItems[0].id,
  );

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
                  <p className="font-medium text-black text-sm">Main Project</p>
                </div>
              </div>
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">Project Type</p>
                  <p className="font-medium text-black text-sm">NEM</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6 flex-col md:flex-row">
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">Address</p>
                  <p className="font-medium text-black text-sm">
                    38507 Kihn Mountains, Miami
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
                  <p className="font-medium text-black text-sm">NYSEG</p>
                </div>
              </div>
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">COD Date</p>
                  <p className="font-medium text-black text-sm">Aug 23, 2023</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6 flex-col md:flex-row">
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">Address</p>
                  <p className="font-medium text-black text-sm">
                    38507 Kihn Mountains, Miami
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
                  <p className="font-medium text-xs text-grey">System Size</p>
                  <p className="font-medium text-black text-sm">7,000 kWdc</p>
                </div>
              </div>
              <div className="w-full bg-light-grey border-2 border-inactive rounded-xl">
                <div className="p-2">
                  <p className="font-medium text-xs text-grey">
                    Estimated P50 Production
                  </p>
                  <p className="font-medium text-black text-sm">
                    9,975,000 kWh
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
