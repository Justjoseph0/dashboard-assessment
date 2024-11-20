import { CloseIcon } from "./Icons";
import { useState } from "react";

const SubscriptionCard = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`bg-offWhite rounded-xl p-6 max-w-sm mx-auto relative mt-44  ${isOpen ? 'block' : 'hidden'}`}>
    {/* Close Button */}
    <button 
    onClick={() => setIsOpen(false)}
    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
      <CloseIcon />
    </button>

    {/* Progress Circle */}
    <div className="relative w-[58px] h-[58px] mb-6">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="29"
          cy="29"
          r="26"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="4"
        />
        <circle
          cx="29"
          cy="29"
          r="26"
          fill="none"
          stroke="#6C5DD3"
          strokeWidth="4"
          strokeDasharray="163"
          strokeDashoffset="23"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-[#6C5DD3]">
        86%
      </span>
    </div>

    {/* Content */}
    <div className="text-start">
      <h2 className="text-base font-bold text-gray-900 mb-3">
        Subscription Plan
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Your Subscription plan will expire soon please upgrade!
      </p>
      <button className="text-customPurple text-sm font-semibold">
        Upgrade
      </button>
    </div>
  </div>
  )
}

export default SubscriptionCard