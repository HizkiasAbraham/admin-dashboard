import { Icon } from '../../icon';
import { SearchInputProp } from './types';

export function SearchInput(props: SearchInputProp) {
  const { width, placeHolder } = props;

  return (
    <div className={`relative flex ${width || ''}`}>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none cursor-pointer">
        <Icon.Search className="h-5 w-5 text-grey" />
      </div>
      <input
        type={'text'}
        placeholder={placeHolder}
        className={`rounded-xl border-inactive w-full`}
      />
    </div>
  );
}
