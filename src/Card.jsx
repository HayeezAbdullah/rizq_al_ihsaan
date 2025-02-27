const Card = ({ title, number, icon }) => {
  return (
    <div className="bg-[#E3D2C3] shadow-lg w-full h-[133px] rounded-xl p-5 flex flex-col justify-between relative hover:shadow-xl transition-shadow duration-300 border">
      {icon && (
        <div className="absolute right-4 top-4 text-[#2DAA9E] text-2xl hidden lg:block">
          {icon}
        </div>
      )}

      <p className="text-gray-600 text-lg font-medium">{title}</p>
      <p className="text-5xl font-bold text-gray-700">{number}</p>
    </div>
  );
};

export default Card;
