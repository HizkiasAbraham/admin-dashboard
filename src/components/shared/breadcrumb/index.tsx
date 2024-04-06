import { useRouter } from "next/navigation";
import { OutlinedButton } from "../buttons/outlined-button";
import { Icon } from "../icon";
import { SearchInput } from "../inputs/searchInput";
import { BreadcrumbInput } from "./types";

export function BreadCrumb(props: BreadcrumbInput) {
  const { paths, showSearchAndUpload, classes } = props;
  const router = useRouter();

  const navigate = (url: string) => router.push(url);

  return (
    <div className={`flex w-full flex-col md:flex-row mb ${classes}`}>
      <div className="w-3/4 flex justify-start items-center gap-4">
        {paths?.length === 1 && (
          <p className="text-black text-2xl font-bold">{paths[0].name}</p>
        )}
        {paths &&
          paths?.length > 1 &&
          paths?.map((path, i) =>
            i !== paths.length - 1 ? (
              <>
                <p
                  key={`p${i}`}
                  onClick={() => navigate(path.url)}
                  className="text-black text-2xl font-bold cursor-pointer"
                >
                  {path.name}
                </p>
                <Icon.ArrowRight
                  key={`i${i}`}
                  className="h-5 w-5 text-green font-bold text-xl mt-1"
                />
              </>
            ) : (
              <p key={`p${i}`} className="text-grey text-2xl font-bold">
                {path.name}
              </p>
            )
          )}
      </div>
      {showSearchAndUpload && (
        <div className="flex-auto w-1/4 flex justify-start md:justify-end aligin-center gap-4">
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
