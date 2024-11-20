import { KitchenIcon, CursorIcon } from "./Icons";
const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    image: "images/ana.png",
  },
  {
    id: 2,
    name: "George Litz",
    email: "georgelitz@gmail.com",
    image: "images/george.png",
  },
  {
    id: 3,
    name: "John Miller",
    email: "johnmiller@gmail.com",
    image: "images/john.png",
  },
  {
    id: 4,
    name: "Jane Johnson",
    email: "janejohnson@gmail.com",
    image: "images/jane.png",
  },
  {
    id: 5,
    name: "Mezei Ágnes",
    email: "mezeiagnes@gmail.com",
    image: "images/agnes.png",
  },
  {
    id: 6,
    name: "Katona Beatrix",
    email: "katona.beatrix@gmail.com",
    image: "images/katona.png",
  },
  {
    id: 7,
    name: "Halász Emese",
    email: "halaszemese@gmail.com",
    image: "images/emese.png",
  },
];

const mapMarkers = [
  { position: "md:bottom-[8%] bottom-[3%] md:left-[50%] left-[48%]" },
  { position: "bottom-[8%] right-[28%]" },
  { position: "md:bottom-[0%] bottom-[-5%] md:right-[7%] right-[4%]" },
  { position: "md:top-[35%] top-[30%] md:right-[15%] right-[13%]" },
  { position: "md:top-[8%] top-[0%] md:right-[13%] right-[10%]" },
  { position: "md:top-[35%] top-[30%] md:left-[51%] left-[50%]" },
  { position: "md:top-[14%] top-[5%] md:left-[27%] left-[25%]" },
  { position: "md:top-[53%] top-[49%] md:right-[26%] right-[23%]" },
  { position: "bottom-[28%] left-[23%]" },
];

function CustomerList() {
  return (
    <section className="flex lg:flex-row flex-col  gap-5">
      {/* customer map */}
      <div className="bg-white rounded-md py-6 lg:w-[70%] flex flex-col gap-y-6 shadow-md">
        <header className="px-4 border-b border-border pb-6">
          <h2 className="text-lg font-bold text-blue-950">Customer Map</h2>
        </header>
        <div className="px-4">
          <div className="relative w-full lg:h-[318px]">
            <img
              src="images/map.png"
              alt="World Map"
              className="w-full h-full object-cover"
            />
            {/* Map Markers */}
            {mapMarkers.map((marker, index) => (
              <div
                key={index}
                className={`absolute ${marker.position} scale-[0.6] md:scale-100 transition-transform hover:scale-110`}
              >
                <KitchenIcon />
              </div>
            ))}

            {/* Paradise Cay  */}
            <div className="absolute md:top-[40%] top-[15%] md:left-[18%] left-[20%] block scale-[0.45] md:scale-100 origin-left">
              <div className="bg-white w-28 h-16 flex flex-col justify-center items-center shadow-lg p-3 whitespace-nowrap rounded-lg">
                <h3 className="font-medium text-gray-900 text-xs">
                  Paradise Cay
                </h3>
                <p className="text-xs text-customGray">201 Customer</p>
                {/* Triangle pointer */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
              </div>
            </div>
            <div className="absolute md:bottom-[24%] bottom-[20%] md:left-[25%] left-[27%]">
              <CursorIcon />
            </div>
          </div>
        </div>
      </div>
      {/* customer list */}
      <div className="bg-white rounded-md lg:w-[30%] flex flex-col gap-y-4 p-6 shadow-md">
        <header>
          <h2 className="text-lg font-bold text-blue-950">Customer List</h2>
        </header>
        {/* customer names */}
        <div className="flex flex-col gap-y-3">
          {customers.map((customer) => (
            <div key={customer.id} className="flex items-center gap-x-4">
              <img
                src={customer.image}
                alt={`${customer.name}'s avatar`}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-sm font-bold text-blue-950">
                  {customer.name}
                </h3>
                <p className="text-sm text-customGray font-normal">
                  {customer.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerList;
