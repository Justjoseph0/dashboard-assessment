import {
  ThreeUserIcon,
  SearchIcon,
  MailIcon,
  NotificationIcon,
  PaperIcon,
  ActivityIcon,
  BlackCartIcon,
  HamburgerIcon,
} from "./Icons";
import Card from "./Card";
import Menu from "./Menu";
import CustomerList from "./CustomerList";
import { RevenueCard } from "./RevenueCard";
import { CustomersCard } from "./CustomersCard";
import { useState } from "react";
import Sidebar from "./Sidebar";
const cardData = [
  {
    id: 1,
    icon: <PaperIcon />,
    title: "Total Menu",
    value: "345",
  },
  {
    id: 2,
    icon: <ActivityIcon />,
    title: "Total Revenue",
    value: "$37,193.00",
  },
  {
    id: 3,
    icon: <ThreeUserIcon />,
    title: "Total Customers",
    value: "1394",
  },
  {
    id: 4,
    icon: <BlackCartIcon />,
    title: "Total Orders",
    value: "3,500",
  },
];

function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="bg-offWhite flex flex-col lg:flex-row justify-between min-h-screen">
      {/* Mobile Header with Hamburger */}
      <div className="lg:hidden bg-white w-full px-4 py-5 flex items-center justify-between sticky top-0 z-20">
        <img src="images/logo.png" alt="logo" className="h-8" />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          <HamburgerIcon />
        </button>
      </div>
      {/* sidebar */}
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content */}
      <div className="lg:w-[90%] w-full">
        {/* Desktop Header */}
        <header className="bg-white hidden lg:block">
          <div className="flex justify-between items-center px-6 py-5">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Hi, Taylor!
              </h1>
              <p className="text-gray-600 text-sm font-normal">
                Let&apos;s check your store today
              </p>
            </div>

            {/* Desktop Search & Profile */}
            <div className="flex items-center gap-x-6">
              <div className="flex items-center gap-x-4 border-r border-gray-300 pr-4">
                <div className="flex items-center gap-x-4 p-4 border border-gray-300 rounded-xl w-[282px] h-[48px] bg-gray-50">
                  <SearchIcon />
                  <input
                    type="search"
                    placeholder="Search"
                    className="bg-transparent w-full outline-none placeholder-gray-500 focus:ring-0"
                    aria-label="Search"
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <MailIcon />
                  <NotificationIcon />
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-golden flex items-center justify-center">
                  <img src="images/Avatar.png" alt="profile" />
                </div>
                <span className="text-base font-semibold text-gray-900 leading-6">
                  Tynisha Obey
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="p-4 lg:p-6 flex flex-col gap-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-8">
            {cardData.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-1">
            <div className="h-[371px]">
              <RevenueCard />
            </div>
            <div className="lg:h-[371px]">
              <CustomersCard />
            </div>
          </div>
          <CustomerList />
          <Menu />
        </main>
      </div>
    </section>
  );
}

export default Dashboard;
