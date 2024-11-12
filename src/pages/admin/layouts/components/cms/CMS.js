import React from "react";
import Cmsdata from "./components/Cmsdata";
import Section from "./components/Section"

const CMS = () => {
  return (
    <div className="flex mtpx16 w-full gap-12">
      <div className="section_wid">
        <Section />
      </div>
      <div className="cms_wid">
        <Cmsdata />
      </div>
    </div>
  );
};

export default CMS;
