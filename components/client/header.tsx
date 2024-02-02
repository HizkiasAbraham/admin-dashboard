import Image from 'next/image';
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import { HeaderNavItem } from './header-nav-item';

export default function Header() {
  return (
    <div className="invisible md:visible border-x-0 border-inactive border-b-2">
      <div className="m-4 flex">
        <div className="flex flex-auto justify-start gap-4">
          <HeaderNavItem icon="Home" isActive={false} text="Dashboard" />
          <HeaderNavItem icon="Location" isActive={true} text={'Projects'} />
        </div>
        <div className="flex flex-auto justify-center">
          <Image alt="" width={120} height={20} src={'/images/logo.png'} />
        </div>
        <div className="flex flex-auto justify-end gap-4">
          <HeaderNavItem
            icon="Notification"
            text="Notifications"
            isActive={false}
          />
          <HeaderNavItem icon="Account" text="Profile" isActive={false} />
        </div>
      </div>
    </div>
  );
}
