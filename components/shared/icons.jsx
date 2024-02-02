import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import LocationIcon from '@heroicons/react/24/outline/MapPinIcon';
import NotificationIcon from '@heroicons/react/24/outline/BellIcon';
import UserAcconutIcon from '@heroicons/react/24/outline/UserIcon';
import ArrowRightIcon from '@heroicons/react/24/outline/ArrowRightIcon';
import UploadIcon from '@heroicons/react/24/outline/ArrowUpTrayIcon';
import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon';

export const Icon = {
  Home: (props) => <HomeIcon {...props} />,
  Location: (props) => <LocationIcon {...props} />,
  Notification: (props) => <NotificationIcon {...props} />,
  Account: (props) => <UserAcconutIcon {...props} />,
  ArrowRight: (props) => <ArrowRightIcon {...props} />,
  Upload: (props) => <UploadIcon {...props} />,
  Search: (props) => <SearchIcon {...props} />,
  Calendar: (props) => <CalendarIcon {...props} />,
};
