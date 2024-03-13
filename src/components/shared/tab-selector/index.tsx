'use client';

import { TabSelectorInput } from './types';

const activeClass =
  'flex-1 bg-white border-1 border-inactive cursor-pointer shadow h-12 flex items-center justify-center rounded-xl';
const nonActiveClass = 'flex-1 flex items-center justify-center cursor-pointer';

export function TabSelector(props: TabSelectorInput) {
  const { items, selectedItem, onTabItemChanged } = props;

  return (
    <div className="w-full flex  bg-light-grey rounded-xl h-10 items-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={selectedItem === item.id ? activeClass : nonActiveClass}
          onClick={() => onTabItemChanged && onTabItemChanged(item.id)}
        >
          {selectedItem === item.id ? (
            <p className="font-medium text-sm text-black">{item.label}</p>
          ) : (
            <p className="font-medium text-sm text-grey">{item.label}</p>
          )}
        </div>
      ))}
    </div>
  );
}
