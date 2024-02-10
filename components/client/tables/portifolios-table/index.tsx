'use client';

import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { DatePicker } from '@/components/shared/inputs/date-picker';
import { usd } from '@/utils/format-numbers';
import { useRouter } from 'next/navigation';
import { PortfoliosTableInput, TableRowInput } from './types';

export function PortifoliosTable(props: PortfoliosTableInput) {
  const { data } = props;
  const router = useRouter();

  const navigate = (id: string) => router.push('/client/portifolios/' + id);

  return (
    <div className="w-max md:w-full">
      <Card>
        <CardHeading title="Protifolios">
          <DatePicker width="w-40" />
        </CardHeading>
        <CardContent>
          <div className="mt-4 mb-2">
            <TableHeader />
            {data?.map((row, index) => (
              <TableBody key={index} row={row} navigate={navigate} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="flex w-full gap-1 w-full">
      <div className="w-full flex justify-start pl-4">
        <p className="text-xs text-grey">Name </p>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-xs text-grey">Size kWdc </p>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-xs text-grey"># of projects </p>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-xs text-grey">Revenue </p>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-xs text-grey">A/R </p>
      </div>
    </div>
  );
}

function TableBody(props: TableRowInput) {
  const { row, navigate } = props;
  return (
    <div
      className="rounded-xl bg-white-smoke mt-2 mb-2 gap-2 cursor-pointer w-full"
      onClick={() => navigate('portifolioId')}
    >
      <div className="flex p-4">
        <div className="w-full flex justify-start items-center">
          <p className="font-bold text-black text-sm">{row?.name}</p>
        </div>
        <div className="w-full flex justify-center items-center">
          <p className="font-medium text-black text-sm">
            {row?.sizeKwdc?.toLocaleString('en-US')}
          </p>
        </div>
        <div className="w-full flex justify-center items-center border-l-2 border-r-2 border-inactive">
          <p className="font-medium text-black text-sm">
            {row?.numberOfProjects?.toLocaleString('en-US')}
          </p>
        </div>
        <div className="w-full flex justify-center items-center border-r-2 border-inactive">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-black text-sm">
              {usd().format(row?.revenue)}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-black text-sm">
              {usd().format(row?.ar)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
