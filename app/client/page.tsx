import { Card, CardContent, CardHeading } from '@/components/shared/card';
import { DatePicker } from '@/components/shared/inputs/date-picker';
import { Icon } from '@/components/shared/icon';
import { Select } from '@/components/shared/inputs/select';
import { SearchInput } from '@/components/shared/inputs/searchInput';
import { ProjectsTable } from '@/components/client/tables/projects-table';
import { projects } from '@/mockups/projects';
import { PortifoliosTable } from '@/components/client/tables/portifolios-table';
import { portifiolios } from '@/mockups/protfolios';
import { BankedCredits } from '@/components/client/tables/banked-credits';
import { bankedCredits } from '@/mockups/bank-credits';
import { Paginator } from '@/components/shared/paginator';
import { CustomersTable } from '@/components/client/tables/customers';
import { customers } from '@/mockups/customers';
import { BillingAndAging } from '@/components/client/tables/billing-and-aging';
import { billingAndAging } from '@/mockups/billingAndAging';
import { ProjectDetails } from '@/components/client/tables/project-details';

export default function Client() {
  return (
    <div>
      <ProjectDetails />
      <BillingAndAging data={billingAndAging as []} />
      <CustomersTable data={customers as []} />
      <div className="flex gap-2">
        <div className="flex-auto">
          <PortifoliosTable data={portifiolios as []} />
        </div>
        <div className="flex-auto"></div>
      </div>
      <BankedCredits
        customerBankCredits={bankedCredits.customerBankCredits}
        hostBankCredits={bankedCredits.hostBankCredits}
      />
      <ProjectsTable data={[...projects, ...projects] as []} />
    </div>
  );
}
