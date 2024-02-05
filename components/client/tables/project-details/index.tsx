import { Card, CardContent, CardHeading } from '@/components/shared/card';

export function ProjectDetails() {
  return (
    <Card>
      <CardHeading title="Project Details" />
      <CardContent>
        <div className="flex mt-4">
          <div className="w-full pb-4">
            <div className="flex gap-4">
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
            <div className="flex gap-4 mt-6">
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
            <div className="flex gap-4 mt-6">
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
            <div className="flex gap-4 mt-6">
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
            <div className="flex gap-4 mt-6">
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
          <div className="w-full"></div>
        </div>
      </CardContent>
    </Card>
  );
}
