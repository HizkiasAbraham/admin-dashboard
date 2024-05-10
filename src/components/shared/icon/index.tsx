import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import LocationIcon from "@heroicons/react/24/outline/MapPinIcon";
import NotificationIcon from "@heroicons/react/24/outline/BellIcon";
import UserAcconutIcon from "@heroicons/react/24/outline/UserIcon";
import ArrowLeftIcon from "@heroicons/react/24/outline/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import UploadIcon from "@heroicons/react/24/outline/ArrowUpTrayIcon";
import DownloadIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon";
import SearchIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon";
import ArrowURight from "@heroicons/react/24/outline/ArrowUpRightIcon";
import ArrowDLeft from "@heroicons/react/24/outline/ArrowDownLeftIcon";
import ChevronD from "@heroicons/react/24/outline/ChevronDownIcon";
import ChevronL from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronR from "@heroicons/react/24/outline/ChevronRightIcon";
import EyeSlash from "@heroicons/react/24/outline/EyeSlashIcon";
import CheckCircle from "@heroicons/react/24/outline/CheckCircleIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3BottomRightIcon";
import XMark from "@heroicons/react/24/outline/XMarkIcon";
import USDIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import CloudIcon from "@heroicons/react/24/outline/CloudIcon";
import ArchiveBox from "@heroicons/react/24/outline/ArchiveBoxIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import DocumentText from "@heroicons/react/24/outline/DocumentTextIcon";
import Plus from "@heroicons/react/24/outline/PlusCircleIcon";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import Minus from "@heroicons/react/24/outline/MinusCircleIcon";
import InfoCircle from "@heroicons/react/24/outline/InformationCircleIcon";
import Folder from "@heroicons/react/24/outline/FolderIcon";
import Sun from "@heroicons/react/24/outline/SunIcon";
import Cloud from "@heroicons/react/24/outline/CloudIcon";
import Globe from "@heroicons/react/24/outline/GlobeAltIcon";
import Fire from "@heroicons/react/24/outline/FireIcon";

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
  ArrowDown: (props: any) => <ChevronD {...props} />,
  Account: (props: any) => <UserAcconutIcon {...props} />,
  ArrowLeft: (props: any) => <ArrowLeftIcon {...props} />,
  ArrowRight: (props: any) => <ArrowRightIcon {...props} />,
  Upload: (props: any) => <UploadIcon {...props} />,
  Download: (props: any) => <DownloadIcon {...props} />,
  Search: (props: any) => <SearchIcon {...props} />,
  Calendar: (props: any) => <CalendarIcon {...props} />,
  ArrowUpRight,
  ArrowDownLeft,
  ChevronLeft: (props: any) => <ChevronL {...props} />,
  ChevronRight: (props: any) => <ChevronR {...props} />,
  VisibilityHidden: (props: any) => <EyeSlash {...props} />,
  CheckCircle: (props: any) => <CheckCircle {...props} />,
  DrawerToggler: (props: any) => <Bars3Icon {...props} />,
  Cancel: (props: any) => <XMark {...props} />,
  USD: (props: any) => <USDIcon {...props} />,
  CloudIcon: (props: any) => <CloudIcon {...props} />,
  GallonBucket: (props: any) => <ArchiveBox {...props} />,
  Flash: (props: any) => <BoltIcon {...props} />,
  DocumentFile: (props: any) => <DocumentText {...props} />,
  CircularPlus: (props: any) => <Plus {...props} />,
  CircularMinus: (props: any) => <Minus {...props} />,
  InfoCircle: (props: any) => <InfoCircle {...props} />,
  Folder: (props: any) => <Folder {...props} />,
  Plus: (props: any) => <PlusIcon {...props} />,
  Sun: (props: any) => <Sun {...props} />,
  Cloud: (props: any) => <Cloud {...props} />,
  Globe: (props: any) => <Globe {...props} />,
  Fire: (props: any) => <Fire {...props} />,
};
