import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import LocationIcon from '@heroicons/react/24/outline/MapPinIcon';
import NotificationIcon from '@heroicons/react/24/outline/BellIcon';
import UserAcconutIcon from '@heroicons/react/24/outline/UserIcon';
import ArrowRightIcon from '@heroicons/react/24/outline/ArrowRightIcon';

export const Icon = {
  Home: (props) => <HomeIcon {...props} />,
  Location: (props) => <LocationIcon {...props} />,
  Notification: (props) => <NotificationIcon {...props} />,
  Account: (props) => <UserAcconutIcon {...props} />,
  ArrowRight: (props) => <ArrowRightIcon {...props} />,
};
