import { NavItemProp } from '@/components/client/header/types';
import { Icon } from '@/components/shared/icons';

export function HeaderNavItem(prop: NavItemProp) {
  const { icon, text, isActive } = prop;

  const NavIcon = Icon[icon];
  return (
    <div className="flex gap-1 cursor-pointer">
      <NavIcon
        className={`w-5 h-5 ${isActive ? 'text-green-focus' : 'text-grey'}`}
      />
      <span className="font-medium text-sm"> {text}</span>
    </div>
  );
}
