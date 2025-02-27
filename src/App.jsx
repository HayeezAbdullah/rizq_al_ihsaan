import Card from "./Card";
import Navbar from "./Navbar";
import GraphCard from "./Graphcard";
import Header from "./Header";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import Zakathfund from "./Zakathfund";
import { useState, useEffect } from "react";
import SplashScreen from "./Splashscreen";
import Dropoutstats from "./Dropoutstats";
import Performancestats from "./Performancestats";
import Familystats from "./Familystats";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showStudentsData, setShowStudentsData] = useState(false);
  const [showTreasuryData, setShowTreasuryData] = useState(false);
  const [showFamilyData, setShowFamilyData] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <div className="bg-[#EAEAEA] min-h-screen">
      {/* <Navbar /> */}
      <div className="p-5">
        <Header />
        <div className="flex flex-col md:flex-row mx-5 px-6 py-6 gap-6 ">
          <div className="flex flex-col gap-4 w-full md:w-[25%]">
            <Card
              title="Total Families"
              number="100"
              icon={<AiOutlineHeart />}
              ontrigger={() => {
                setShowFamilyData(true);
                setShowTreasuryData(false);
                setShowStudentsData(false);
              }}
            />
            <Card
              title="Total Students"
              number="57"
              icon={<AiOutlineUser />}
              ontrigger={() => {
                setShowStudentsData(true);
                setShowTreasuryData(false);
                setShowFamilyData(false);
              }}
            />
            <Card
              title="Current Treasury"
              number="$12,345"
              icon={<FaDollarSign />}
              ontrigger={() => {
                setShowTreasuryData(true);
                setShowStudentsData(false);
                setShowFamilyData(false);
              }}
            />
          </div>

          {showTreasuryData && (
            <>
              <div className="w-full md:w-[37%]">
                <GraphCard />
              </div>
              <div className="w-full md:w-[38%]">
                <Zakathfund />
              </div>
            </>
          )}
          {showStudentsData && (
            <>
              <div className="w-full md:w-[38%]">
                <Dropoutstats />
              </div>
              <div className="w-full md:w-[37%]">
                <Performancestats />
              </div>
            </>
          )}
          {showFamilyData && (
            <>
              <div className="w-full my-auto md:w-[100%]">
                <Familystats />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
