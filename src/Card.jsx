import { GoLocation } from "react-icons/go";

const Card = ({ title, number }) => {
  return (
    <div className="bg-white shadow-lg w-full h-[133px] rounded-xl p-5 flex flex-col justify-between relative border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <GoLocation className="absolute right-4 top-4 text-gray-600 text-2xl" />

      <p className="text-gray-600 text-lg font-medium">{title}</p>

      <p className="text-4xl font-bold text-gray-700">{number}</p>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 rounded-b-xl"></div>
    </div>
  );
};

export default Card;
