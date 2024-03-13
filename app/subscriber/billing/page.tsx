import { Card, CardContent } from "@/src/components/shared/card";
import { TextInput } from "@/src/components/shared/inputs/text-input";
import { BreadCrumb } from "@/src/components/subscriber/bread-crumb";
import { InvoicesTable } from "@/src/components/subscriber/invoices-table";
import { invoicesData } from "@/src/mockups/invoices";

export default function Billing() {
  return (
    <div>
      <BreadCrumb pageName="Billing" />
      <div className="mt-4">
        <Card>
          <CardContent>
            <div className="flex justify-between">
              <p className="text-black text-baseline font-bold">
                Billing History
              </p>
              <p className="text-green text-baseline font-medium">
                10044874849
              </p>
            </div>
            <div className="mt-6 md:w-3/4 flex flex-col md:flex-row gap-6 pb-4">
              <div className="flex-1 flex gap-6 flex-col">
                <TextInput
                  type="text"
                  placeholder="Full Name"
                  value="Larisa Yevtushenko"
                />
                <TextInput
                  type="text"
                  placeholder="Total Balance"
                  value="No Balance"
                />
                <TextInput type="text" placeholder="Autopay" value="False" />
                <TextInput
                  type="text"
                  placeholder="Phone"
                  value="(845) 887-9017"
                />
                <TextInput
                  type="text"
                  placeholder="Phone"
                  value="callicoonhospitality@gmail.com"
                />
              </div>
              <div className="flex-1 flex gap-6 flex-col">
                <TextInput
                  type="text"
                  placeholder="Address 1"
                  value="22 Upper Main St. Apt"
                />
                <TextInput type="text" placeholder="Address 2" />
                <TextInput type="text" placeholder="City" value="Callicoon" />
                <TextInput type="text" placeholder="State" value="NY" />
                <TextInput type="text" placeholder="Zip" value="12773" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 w-full overflow-x-scroll md:overflow-x-hidden">
        <InvoicesTable title="Open invoices" />
      </div>
      <div className="mt-4 w-full overflow-x-scroll md:overflow-x-hidden">
        <InvoicesTable title="Closed invoices" data={invoicesData as []} />
      </div>
    </div>
  );
}
