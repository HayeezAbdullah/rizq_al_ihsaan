import { GoLocation } from "react-icons/go"; // Location Icon

const Card = ({ title, number }) => {
  return (
    <div className="bg-[#F6F6F6] shadow-md w-[238px] h-[113px] rounded-lg p-4 flex flex-col justify-between relative">
      {/* Title Text */}
      <p className="text-gray-700 text-sm">{title}</p>

      {/* Number (Bold & Large) */}
      <p className="text-2xl font-bold text-gray-900">{number}</p>

      {/* Location Icon - Positioned in Right Corner */}
      <GoLocation className="absolute right-4 bottom-4 text-gray-600 text-2xl" />
    </div>
  );
};

export default Card;
