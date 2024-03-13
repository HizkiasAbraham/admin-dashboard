import { FullFlatButton } from "@/src/components/shared/buttons/full-solid-button";
import { Card, CardContent } from "@/src/components/shared/card";
import { TextArea } from "@/src/components/shared/inputs/text-area";
import { TextInput } from "@/src/components/shared/inputs/text-input";
import { BreadCrumb } from "@/src/components/subscriber/bread-crumb";

export default function ContactUS() {
  return (
    <div>
      <BreadCrumb pageName="Contact Us" />
      <div className="flex flex-col md:flex-row gap-1 md:gap-6">
        <div className="md:w-3/5">
          {" "}
          <Card>
            <CardContent>
              <p className="text-black font-bold">How can we help?</p>
              <p className="mt-6 text-black font-medium text-sm">
                Please reach out to us using the contact info below or through
                the contact form provided.
              </p>
              <hr className="mt-8 mb-8 text-inactive" />
              <p className="mt-4 text-sm text-black font-bold">
                Do you have questions about your account or a bill?
              </p>
              <div className="flex flex-col md:flex-row gap-5 mt-6">
                <TextInput
                  type="email"
                  placeholder="Email"
                  value="help@meadow.energy"
                  disabled
                />
                <TextInput
                  type="text"
                  placeholder="Phone number"
                  value="845-414-3491"
                  disabled
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-2/5">
          <Card>
            <CardContent>
              <p className="text-black font-bold">Contact From</p>
              <div className="flex flex-col gap-3 mt-4">
                <TextInput type="text" placeholder="Full name" />
                <TextInput type="text" placeholder="Email" />
                <TextInput type="text" placeholder="Phone number (optional)" />
                <TextInput
                  type="text"
                  placeholder="Category"
                  value="Please select..."
                />
                <TextArea placeholder="Message..." />
                <div className="mt-8">
                  <FullFlatButton>Submit</FullFlatButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
