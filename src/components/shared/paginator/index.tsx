import { OutlinedButton } from '../buttons/outlined-button';
import { Icon } from '../icon';
import { Select } from '../inputs/select';
import { PaginatorInput } from './types';

export function Paginator(props: PaginatorInput) {
  const { alignment } = props;
  return (
    <div className={`flex justify-${alignment || 'start'}`}>
      <div className="flex gap-3 items-center">
        <p className="font-medium text-sm text-grey">1 - 10 of 1000</p>
        <p className="font-medium text-sm text-grey">Show:</p>
        <Select placeHolder="10" width="w-24" options={[]} />
        <OutlinedButton color="inactive">
          <div className="flex items-center">
            <p className="text-xs text-grey">|</p>{' '}
            <Icon.ChevronLeft className="text-grey w-5 h-5" />
          </div>
        </OutlinedButton>
        <OutlinedButton color="inactive">
          <div className="flex items-center">
            <Icon.ChevronLeft className="text-grey w-5 h-5" />
          </div>
        </OutlinedButton>
        <OutlinedButton color="inactive">
          <div className="flex items-center">
            <Icon.ChevronRight className="text-green w-5 h-5" />
          </div>
        </OutlinedButton>
        <OutlinedButton color="inactive">
          <div className="flex items-center">
            <Icon.ChevronRight className="text-green w-5 h-5" />
            <p className="text-xs text-green">|</p>{' '}
          </div>
        </OutlinedButton>
      </div>
    </div>
  );
}
