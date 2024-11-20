import SubscriptionCard from "./SubscriptionCard";
import {
  DashboardIcon,
  UsersIcon,
  OrdersIcon,
  AnalyticsIcon,
  MenuIcon,
  NextIcon,
  SearchIcon,
  MailIcon,
  NotificationIcon,
  CloseIcon,
} from "./Icons";

function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <div
      className={`
        bg-white w-full lg:w-[271px] flex flex-col py-4 lg:py-8 px-6
        fixed lg:relative top-0 left-0 h-full z-20
        transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:transform-none transition-transform duration-200 ease-in-out
      `}
    >
      {/* Mobile Close Button */}
      <div className="flex lg:hidden justify-end mb-4">
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-2 hover:bg-gray-100 rounded-full"
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>
      </div>

      {/* hidden on mobile */}
      <div className="hidden lg:block mb-16">
        <img src="images/logo.png" alt="logo" />
      </div>

      {/* Mobile Profile  */}
      <div className="lg:hidden flex items-center gap-x-4 p-4 border-b border-gray-200">
        <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-golden flex items-center justify-center">
          <img src="images/Avatar.png" alt="profile" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold text-gray-900 leading-6">
            Tynisha Obey
          </span>
          <span className="text-sm text-gray-500">Store Admin</span>
        </div>
      </div>

      {/* Mobile Search & Notifications */}
      <div className="lg:hidden p-4 border-b border-gray-200">
        <div className="flex items-center gap-x-4 p-3 border border-gray-300 rounded-xl bg-gray-50 mb-4">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search"
            className="bg-transparent w-full outline-none placeholder-gray-500 focus:ring-0"
            aria-label="Search"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <button className="flex items-center gap-x-2 text-gray-600 hover:text-gray-900">
            <MailIcon />
            <span className="text-sm">Messages</span>
          </button>
          <button className="flex items-center gap-x-2 text-gray-600 hover:text-gray-900">
            <NotificationIcon />
            <span className="text-sm">Notifications</span>
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className="flex flex-col gap-y-6 mt-6">
        <li className="py-3 px-4 bg-customPurple text-white rounded-xl flex items-center gap-x-3 capitalize">
          <DashboardIcon />
          <span className="text-base font-semibold">dashboard</span>
        </li>
        <li className="py-3 px-4 flex items-center justify-between gap-x-3 text-customGray">
          <div className="flex items-center gap-x-3 capitalize">
            <OrdersIcon />
            <span className="text-base font-semibold">orders</span>
          </div>
          <NextIcon />
        </li>
        <li className="py-3 px-4 flex items-center gap-x-3 capitalize text-customGray">
          <AnalyticsIcon />
          <span className="text-base font-semibold">analytics</span>
        </li>
        <li className="py-3 px-4 flex items-center gap-x-3 capitalize text-customGray">
          <UsersIcon />
          <span className="text-base font-semibold">customers</span>
        </li>
        <li className="py-3 px-4 flex items-center gap-x-3 capitalize text-customGray">
          <MenuIcon />
          <span className="text-base font-semibold">menu</span>
        </li>
      </ul>

      {/* Desktop Avatar section */}
      <div className="hidden lg:block">
        <SubscriptionCard />
      </div>
    </div>
  );
}

export default Sidebar; 