import { OutlinedButton } from "@/components/shared/buttons/outlined-button";
import { Card, CardHeading } from "@/components/shared/card";

export function SolarEnergyCreditsUsageHistory() {
  return (
    <Card>
      <CardHeading title="Solar Energy credits usage history">
        <OutlinedButton color="green">Export .csv</OutlinedButton>
      </CardHeading>
    </Card>
  );
}
