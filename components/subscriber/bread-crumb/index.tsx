import { OutlinedButton } from "@/components/shared/buttons/outlined-button";
import { BreadCrumbProps } from "./types";
import { Icon } from "@/components/shared/icon";
import { SearchInput } from "@/components/shared/inputs/searchInput";

export function BreadCrumb(props: BreadCrumbProps) {
  const { pageName, showSearchAndUpload } = props;
  return (
    <div className="flex w-full flex-col md:flex-row gap-4 md:mt-2 md:mb-2">
      <div className="flex-1 flex justify-start">
        <p className="font-bold text-2xl">{pageName}</p>
      </div>
      {showSearchAndUpload && (
        <div className="flex-auto flex justify-start md:justify-end aligin-center gap-4">
          <OutlinedButton color="inactive hidden md:block">
            <Icon.Search className="text-grey h-5 w-5" />
          </OutlinedButton>
          <div className="md:hidden w-full">
            <SearchInput width="w-full" placeHolder="search" />
          </div>
          <OutlinedButton color="inactive">
            <Icon.Upload className="text-grey h-5 w-5" />
          </OutlinedButton>
        </div>
      )}
    </div>
  );
}
