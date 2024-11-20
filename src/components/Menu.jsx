function Menu() {
  const menuItems = [
    {
      id: 1,
      image: "images/food-1.png",
      title: "Surf & Turf Gift Basket",
      served: 456,
      price: 89.24,
      size: "large",
    },
    {
      id: 2,
      image: "images/food-2.png",
      title: "Shaking Beef Tri-Tip",
      served: 456,
      price: 69.24,
      size: "large",
    },
    {
      id: 3,
      image: "images/food-3.png",
      title: "BBQ Rib Dinner",
      served: 456,
      price: 69.21,
      size: "small",
    },
    {
      id: 4,
      image: "images/food-4.png",
      title: "Chicken & Ribs Combo",
      served: 456,
      price: 98.21,
      size: "small",
    },
    {
      id: 5,
      image: "images/food-5.png",
      title: "Fried Chicken Dinne",
      served: 456,
      price: 83.24,
      size: "small",
    },
    {
      id: 6,
      image: "images/food-7.png",
      title: "Dark & Stormy",
      served: 456,
      price: 90.24,
      size: "small",
    },
  ];

  return (
    <section className="bg-white rounded-lg">
        {/* mobile menu header */}
      <header className="sm:hidden px-4 pt-6 border-b border-border">
        <h2 className="text-lg font-bold text-blue-950 mb-4">Menu</h2>
        <select className="w-full p-2 mb-4 border rounded-lg text-gray-500">
          <option value="all">All Category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </header>

      {/* menu header */}
      <header className="justify-between items-center border-b border-border px-4 pt-6 hidden sm:flex">
        <h2 className="text-lg font-bold text-blue-950">Menu</h2>
        <nav>
          <ul className="flex gap-x-6 overflow-x-auto">
            <li className="text-base font-semibold pb-4 border-b-2 text-[#6C5DD3] border-[#6C5DD3] whitespace-nowrap">
              All Category
            </li>
            <li className="text-base font-medium pb-4 border-b-2 text-gray-500 border-transparent whitespace-nowrap">
              Breakfast
            </li>
            <li className="text-base font-medium pb-4 border-b-2 text-gray-500 border-transparent whitespace-nowrap">
              Lunch
            </li>
            <li className="text-base font-medium pb-4 border-b-2 text-gray-500 border-transparent whitespace-nowrap">
              Dinner
            </li>
          </ul>
        </nav>
      </header>


      {/* menu items */}
      <div className="p-4 flex flex-col gap-y-4 sm:gap-y-8">
        {/* large items */}
        <div className="flex justify-between lg:flex-row flex-col gap-4">
          {menuItems
            .filter((item) => item.size === "large")
            .map((item) => (
              <div
                key={item.id}
                className={`relative ${
                  item.id === 1 ? "lg:w-[60%]" : "lg:w-[38%]"
                } aspect-[16/9] sm:aspect-auto`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg shadow-[0px_4px_6px_-2px_#1E293B1A,0px_12px_16px_-4px_#1E293B0A]"
                />
                <div className="absolute w-[90%] left-1/2 -translate-x-1/2 bottom-5 right-0 p-3 sm:p-4 bg-white/80 backdrop-blur-[27.18px] rounded-lg">
                  <div className="flex justify-between items-center min-h-[40px] sm:h-[60px]">
                    <div className="max-w-[70%]">
                      <h3 className="text-blue-950 font-semibold truncate text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        {item.served} Served
                      </p>
                    </div>
                    <span className="text-blue-950 font-medium text-xs sm:text-sm whitespace-nowrap">
                      ${item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* small items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {menuItems
            .filter((item) => item.size === "small")
            .map((item) => (
              <div key={item.id} className="relative aspect-[16/9] sm:aspect-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg shadow-[0px_4px_6px_-2px_#1E293B1A,0px_12px_16px_-4px_#1E293B0A]"
                />
                <div className="absolute w-[90%] left-1/2 -translate-x-1/2 bottom-5 right-0 p-3 sm:p-4 bg-white/80 backdrop-blur-[27.18px] rounded-lg">
                  <div className="flex justify-between">
                    <div className="max-w-[70%]">
                      <h3 className="text-blue-950 font-semibold truncate text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        {item.served} Served
                      </p>
                    </div>
                    <span className="text-blue-950 font-medium text-xs sm:text-sm whitespace-nowrap">
                      ${item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
