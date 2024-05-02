import { OutlinedButton } from "@/src/components/shared/buttons/outlined-button";
import { Card } from "@/src/components/shared/card";
import { Icon } from "@/src/components/shared/icon";

const fileNames = [
  "Summary",
  "Location Map",
  "Contract (Sep)",
  "Conditions",
  "Receipt ",
];

export function OAndMNotes() {
  return (
    <div className="w-full h-full">
      <Card>
        <div className="flex items-center mt-5">
          <div className="flex flex-1 items-center gap-2">
            <p className="font-semibold text-grey text-baseline">O&M NOTES</p>{" "}
            <Icon.InfoCircle className="w-6 h-6 text-green" />
          </div>
          <div className="flex flex-1 justify-end">
            <OutlinedButton color="inactive">
              <Icon.Plus className="text-green w-4 h-4" />
            </OutlinedButton>
          </div>
        </div>
        <div className="mt-10">
          {fileNames.map((fileName) => (
            <div key={fileName} className="mt-8 bg-light-grey rounded-lg cursor-pointer">
              <div className="p-3 flex items-center gap-4">
                <Icon.Folder className="w-8 h-8 text-purple"/>
                <p className="font-semibold text-lg">{fileName}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
