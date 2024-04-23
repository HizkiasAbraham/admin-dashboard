import { OutlinedButton } from "../buttons/outlined-button";
import { Icon } from "../icon";
import { Select } from "../inputs/select";
import { PaginatorInput } from "./types";

export function Paginator(props: PaginatorInput) {
  const { alignment, table } = props;
  return (
    <div className={`flex justify-${alignment || "start"}`}>
      <div className="flex gap-3 items-center">
        <p className="font-medium text-sm text-grey">
          Page {table?.getState()?.pagination?.pageIndex + 1 || 0} of{" "}
          {table?.getPageCount()?.toLocaleString()}
        </p>
        <p className="font-medium text-sm text-grey">Show:</p>
        <Select
          width="w-24"
          options={[5, 10, 15, 20]}
          onChange={(value: number) => {
            table?.setPageSize(value);
          }}
        />
        <OutlinedButton
          color={table?.getCanPreviousPage() ? "green" : "inactive"}
          onClick={() => table?.firstPage()}
        >
          <div
            className={`flex items-center ${
              table?.getCanPreviousPage() ? "text-green" : "text-grey"
            }`}
          >
            <p className="text-xs ">|</p>{" "}
            <Icon.ChevronLeft className="w-5 h-5" />
          </div>
        </OutlinedButton>
        <OutlinedButton
          color={table?.getCanPreviousPage() ? "green" : "inactive"}
          onClick={() => table?.previousPage()}
        >
          <div
            className={`flex items-center ${
              table?.getCanPreviousPage() ? "text-green" : "text-grey"
            }`}
          >
            <Icon.ChevronLeft className="w-5 h-5" />
          </div>
        </OutlinedButton>
        <OutlinedButton
          color={table?.getCanNextPage() ? "green" : "inactive"}
          onClick={() => table?.nextPage()}
        >
          <div
            className={`flex items-center ${
              table?.getCanNextPage() ? "text-green" : "text-grey"
            }`}
          >
            <Icon.ChevronRight className="w-5 h-5" />
          </div>
        </OutlinedButton>
        <OutlinedButton
          color={table?.getCanNextPage() ? "green" : "inactive"}
          onClick={() => table?.lastPage()}
        >
          <div
            className={`flex items-center ${
              table?.getCanNextPage() ? "text-green" : "text-grey"
            }`}
          >
            <Icon.ChevronRight className="w-5 h-5" />
            <p className="text-xs">|</p>{" "}
          </div>
        </OutlinedButton>
      </div>
    </div>
  );
}
