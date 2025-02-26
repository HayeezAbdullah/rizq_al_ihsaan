const Header = () => {
  return (
    <header className="relative  rounded shadow-lg bg-[#F0E7D6] mx-10 my-1 mt-2 min-h-[10vh] flex flex-col md:flex-row justify-center items-center text-center md:text-left p-4 md:px-12">
      <div className="max-w-2xl  p-5 rounded-lg ">
        <h1 className="text-4xl md:text-4xl font-extrabold text-gray-800 leading-tight">
          Upcoming Event: <br />
          <span className="text-purple-600">Ramazan Khutba🌙 !</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Join us for an amazing event filled with exciting moments and valuable
          insights.
        </p>
      </div>

      <div className="mt-8 md:mt-0 md:ml-12">
        <img
          src="https://th.bing.com/th/id/R.cf4636c119d88afcac5f282e507b6e38?rik=E9Afg2scJssbQg&pid=ImgRaw&r=0"
          alt="Event"
          className="w-50 max-w-md "
        />
      </div>
    </header>
  );
};

export default Header;
