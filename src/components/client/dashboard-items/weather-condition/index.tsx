import { OutlinedButton } from "@/src/components/shared/buttons/outlined-button";
import { SolidButton } from "@/src/components/shared/buttons/solid-button";
import { Card, CardContent, CardHeading } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";

export function WeatherConditions() {
  return (
    <Card>
      <CardHeading title="Weather Conditions" />
      <CardContent>
        <div className="mt-8 mb-4">
          <p className="text-2xl font-bold">Optimum</p>
        </div>
        <div className="flex gap-3 pb-2">
          <OutlinedButton color="green">
            <Icon.Sun className="w-5 h-5 text-green" />
          </OutlinedButton>
          <OutlinedButton color="green">
            <Icon.Cloud className="w-5 h-5 text-green" />
          </OutlinedButton>
          <OutlinedButton color="red">
            <Icon.Fire className="w-5 h-5 text-red" />
          </OutlinedButton>
          <OutlinedButton color="green">
            <Icon.Globe className="w-5 h-5 text-green" />
          </OutlinedButton>
        </div>
      </CardContent>
    </Card>
  );
}
