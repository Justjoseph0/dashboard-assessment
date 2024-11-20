

function Card({ icon, title, value }) {
  return (
    <div className=" rounded-md p-6 flex flex-col gap-y-6 shadow-md backdrop-blur-27 w-full">
      <div className="h-12 w-12 rounded-full flex items-center justify-center bg-white">
        {icon}
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-sm font-normal text-slate-500 leading-5">
          {title}
        </h3>
        <p className="text-slate-800 text-3xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

export default Card;
