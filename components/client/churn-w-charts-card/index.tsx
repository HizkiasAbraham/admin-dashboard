'use client';
import { OutlinedButton } from '@/components/shared/buttons/outlined-button';
import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { BarChart } from '@/components/shared/charts/bar-chart';
import { DatePicker } from '@/components/shared/inputs/date-picker';
import { TabSelector } from '@/components/shared/tab-selector';
import { barChartData } from '@/mockups/chart';
import { useState } from 'react';
import { TabContentInput } from './types';

const churnGraphTabItems = [
  { id: 'customerNumberKWC', label: 'Customer # and kWdc' },
  { id: 'projectsComparision', label: 'Projects Comparision' },
  { id: 'churnReasons', label: 'Churn Reasons' },
];

const TabItemComponents = {};

export function ChurnWithChartsCard() {
  const [selectedItem, setSelectedItem] = useState(churnGraphTabItems[0].id);

  return (
    <Card>
      <CardHeading title="Churn">
        <DatePicker width="w-40 md:w-48" />
        <OutlinedButton color="green">Export .csv</OutlinedButton>
      </CardHeading>
      <CardContent>
        <div className="mt-4 mb-4 flex items-center">
          <p className="text-2xl font-bold">
            {(3250).toLocaleString('en-US')} kW <span>.</span>153 <span>.</span>
            2%
          </p>
        </div>
        <div className="mt-2">
          <TabSelector
            items={churnGraphTabItems}
            selectedItem={selectedItem}
            onTabItemChanged={setSelectedItem}
          />
          <div>
            <TabContent tabId={selectedItem} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TabContent(props: TabContentInput) {
  const { tabId } = props;
  return (
    <div>
      <div className="mt-2">
        <BarChart
          data={barChartData as []}
          height="64"
          dataKeys={['pv', 'uv']}
        />
      </div>
    </div>
  );
}
