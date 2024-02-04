import { OutlinedButton } from '@/components/shared/buttons/outlined-button';
import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { DatePicker } from '@/components/shared/inputs/date-picker';
import { usd } from '@/utils/format-numbers';
import { BillingAndAgingInput, RowInput } from './types';

export function BillingAndAging(props: BillingAndAgingInput) {
  const { data } = props;
  return (
    <Card>
      <CardHeading title="Billing and Aging">
        <DatePicker width="w-48" />
        <OutlinedButton color="green">Export .csv</OutlinedButton>
      </CardHeading>
      <CardContent>
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
        {data?.map((row: any, index) => (
          <div key={index} className="flex w-full">
            <div className="w-4/5 flex w-full gap-1 p-2">
              <div className="rounded-xl w-full bg-white-smoke flex gap-2 cursor-pointer">
                <div className="w-full flex justify-start items-center p-4">
                  <p className="font-bold text-black text-sm">{row?.type}</p>
                </div>
                <div className="w-full flex justify-end items-center p-4">
                  <p className="font-bold text-black text-sm">
                    {usd().format(row?.gross)}
                  </p>
                </div>
                <div className="w-full flex justify-end items-center p-4">
                  <p className="font-bold text-black text-sm">
                    {usd().format(row?.subscriberDiscount)}
                  </p>
                </div>
                <div className="w-full flex justify-end items-center p-4 pr-8">
                  <p className="font-bold text-black text-sm">
                    {usd().format(row?.paymentProcessFee)}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-64 flex gap-1 p-2 justify-end">
              <div className="rounded-xl w-full bg-dark-grey flex gap-2 cursor-pointer justify-end">
                <div className="w-full flex justify-end items-center p-4">
                  <p className="font-bold text-purple text-sm">
                    {usd().format(row?.net)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
