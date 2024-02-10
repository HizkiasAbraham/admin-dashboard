import { NavItemProp } from '@/components/client/header/types';
import { Icon } from '@/components/shared/icon';

export function HeaderNavItem(prop: NavItemProp) {
  const { icon, text, isActive, onClick } = prop;

  const NavIcon = Icon[icon];
  return (
    <div className="flex gap-1 cursor-pointer" onClick={onClick}>
      <NavIcon
        className={`w-5 h-5 ${isActive ? 'text-green-focus' : 'text-grey'}`}
      />
      <span className="font-medium text-sm"> {text}</span>
    </div>
  );
}
