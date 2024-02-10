'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { HeaderNavItem } from './header-nav-item';

export default function Header() {
  const pathName = usePathname();
  const homeIsActive = pathName === '/client/dashboard';
  const projectsIsActive = pathName.includes('/client/projects');
  const profileIsActive = pathName.includes('/client/profile');
  const router = useRouter();

  const navigate = (path: string) => router.push(`/client/${path}`);

  return (
    <div className="border-x-0 border-light-grey border-b-2">
      <div className="m-5 flex">
        <div className="flex flex-auto justify-start gap-4 invisible md:visible">
          <HeaderNavItem
            icon="Home"
            isActive={homeIsActive}
            text="Dashboard"
            onClick={() => navigate('dashboard')}
          />
          <HeaderNavItem
            icon="Location"
            isActive={projectsIsActive}
            text={'Projects'}
            onClick={() => navigate('projects')}
          />
        </div>
        <div className="flex flex-auto justify-center">
          <Image alt="" width={120} height={20} src={'/images/logo.png'} />
        </div>
        <div className="flex flex-auto justify-end gap-4 invisible md:visible">
          <HeaderNavItem
            icon="Notification"
            text="Notifications"
            isActive={false}
          />
          <HeaderNavItem
            icon="Account"
            text="Profile"
            isActive={profileIsActive}
            onClick={() => navigate('profile')}
          />
        </div>
      </div>
    </div>
  );
}
