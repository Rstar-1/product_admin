import React from "react";
import DashSection from "./components/DashSection";
import ApiSection from "./components/ApiSection";

const Dashboard = () => {
  return (
    <div className="cust-scroll py12 px4">
      <div className="flex w-full">
        <div className="w-70 mrpx10">
          <DashSection />
        </div>
        <div className="w-30">
          <ApiSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
