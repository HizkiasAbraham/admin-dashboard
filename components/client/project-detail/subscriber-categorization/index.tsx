'use client';
import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { PieChart } from '@/components/shared/charts/pie-chart';
import { StackedBarChart } from '@/components/shared/charts/stacked-bar-chart';
import { DatePicker } from '@/components/shared/inputs/date-picker';
import { TabSelector } from '@/components/shared/tab-selector';
import { barChartData, piechartData } from '@/mockups/chart';
import { useState } from 'react';

const tabItems = [
  { label: 'QTY', id: 'qty' },
  { label: 'kWdc', id: 'kWdc' },
];

export function SubscriberCategorization() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState(tabItems[0].id);
  return (
    <Card>
      <CardHeading title="Subscriber Categorization">
        <div className="w-full md:w-64">
          <TabSelector
            items={tabItems}
            selectedItem={currentSelectedTab}
            onTabItemChanged={setCurrentSelectedTab}
          />
        </div>
        <DatePicker />
      </CardHeading>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 flex items-center">
            <PieChart data={piechartData as []} />
          </div>
          <div className="flex-1">
            <StackedBarChart
              data={barChartData as []}
              dataKeys={['uv', 'pv', 'amt']}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
