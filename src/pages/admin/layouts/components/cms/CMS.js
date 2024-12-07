import React from "react";
import Cmsdata from "./components/Cmsdata";
import Section from "./components/Section"

const CMS = () => {
  return (
    <div className="cust-scroll py12">
      <div className="w-full">
        <Section />
      </div>
      {/* <div className="cms_wid">
        <Cmsdata />
      </div> */}
    </div>
  );
};

export default CMS;
