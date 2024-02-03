import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import LocationIcon from '@heroicons/react/24/outline/MapPinIcon';
import NotificationIcon from '@heroicons/react/24/outline/BellIcon';
import UserAcconutIcon from '@heroicons/react/24/outline/UserIcon';
import ArrowRightIcon from '@heroicons/react/24/outline/ArrowRightIcon';
import UploadIcon from '@heroicons/react/24/outline/ArrowUpTrayIcon';
import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon';
import ArrowURight from '@heroicons/react/24/outline/ArrowUpRightIcon';
import ArrowDLeft from '@heroicons/react/24/outline/ArrowDownLeftIcon';

const ArrowUpRight = () => (
  <div className="w-4 h-4 rounded-full inline-flex items-center justify-center bg-green text-white text-xl font-bold">
    <ArrowURight className="w-3 h-3" />
  </div>
);

const ArrowDownLeft = () => (
  <div className="w-4 h-4 rounded-full inline-flex items-center justify-center bg-red text-white text-xl font-bold">
    <ArrowDLeft className="w-3 h-3" />
  </div>
);

export const Icon = {
  Home: (props: any) => <HomeIcon {...props} />,
  Location: (props: any) => <LocationIcon {...props} />,
  Notification: (props: any) => <NotificationIcon {...props} />,
  Account: (props: any) => <UserAcconutIcon {...props} />,
  ArrowRight: (props: any) => <ArrowRightIcon {...props} />,
  Upload: (props: any) => <UploadIcon {...props} />,
  Search: (props: any) => <SearchIcon {...props} />,
  Calendar: (props: any) => <CalendarIcon {...props} />,
  ArrowUpRight,
  ArrowDownLeft,
};
