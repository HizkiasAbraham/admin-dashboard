import { CardTypeInput } from './types';
import { Icon } from '@/components/shared/icons';
import { DatePicker } from '../date-picker';

export function Card(props: CardTypeInput) {
  const { title, children } = props;
  return (
    <div className="rounded-lg bg-white border-light-grey shadow">
      <div className="m-2 p-3">
        <div className="mt-1 mt-1 flex">
          <div className="flex-auto flex justify-start">
            {title && (
              <div className="flex gap-1">
                <p className="uppercase font-semibold text-sm text-grey">
                  {title}
                </p>
                <Icon.ArrowRight className="text-green w-5 h-5" />
              </div>
            )}
          </div>
          <div className="flex-auto flex justify-end">
            <div>
              <DatePicker width="w-48" />
            </div>
          </div>
        </div>
        <div className="mt-1 mt-1">{children}</div>
      </div>
    </div>
  );
}
