import { Card, CardContent } from '@/components/shared/card';

export function SubscribedAllocated() {
  const Green = () => (
    <div className="w-1 flex-1 bg-green rounded h-full"></div>
  );
  const Yellow = () => (
    <div className="w-1 flex-1 bg-yellow rounded h-full"></div>
  );

  return (
    <Card>
      <CardContent>
        <div className="flex gap-2">
          <div className="w-1/3 flex flex-col gap-2">
            <div className="bg-white-smoke rounded-xl">
              <div className="p-4 flex flex-col">
                <div className="w-full border-l-2 border-green flex">
                  <p className="font-bold text-sm text-black ml-1">110%</p>
                </div>
                <p className="font-medium text-xs text-grey mt-1">Subscribed</p>
              </div>
            </div>
            <div className="bg-white-smoke rounded-xl">
              <div className="p-3 flex flex-col">
                <div className="w-full border-l-2 border-yellow flex">
                  <p className="font-bold text-sm text-black ml-1">110%</p>
                </div>
                <p className="font-medium text-xs text-grey mt-1">Allocated</p>
              </div>
            </div>
          </div>
          <div className="w-2/3 flex flex flex-col gap-2 ">
            <div className="flex-1 flex gap-2 items-center p-2">
              {[...new Array(10)].map((val) => (
                <Green key={val} />
              ))}
            </div>
            <div className="flex-1 flex gap-2 items-center p-2">
              {[...new Array(10)].map((val) => (
                <Yellow key={val} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
