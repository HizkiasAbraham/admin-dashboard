import { Accordion } from "@/src/components/shared/accordion/indext";
import { Card, CardContent } from "@/src/components/shared/card";
import { BreadCrumb } from "@/src/components/subscriber/bread-crumb";
import { faqs } from "@/src/mockups/faq";

export default function Faqs() {
  return (
    <div>
      <BreadCrumb pageName="Frequently Asked Questions" showSearchAndUpload />
      <Card>
        <CardContent>
          {faqs.map((mock, i) => (
            <Accordion key={i} title={mock.title} content={mock.content} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
