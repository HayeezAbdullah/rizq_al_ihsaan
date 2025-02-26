import { GoLocation } from "react-icons/go";

const Card = ({ title, number }) => {
  return (
    <div className="bg-[#F6F6F6] shadow-md w-[238px] h-[113px] rounded-lg p-4 flex flex-col justify-between relative">
      <GoLocation className="absolute right-4 top-4 text-gray-900 text-2xl" />

      <p className="text-gray-700 ">{title}</p>

      <p className="text-4xl font-bold text-gray-900">{number}</p>
    </div>
  );
};

export default Card;
