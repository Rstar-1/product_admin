import React from "react";
import FeatherIcon from "feather-icons-react";
import cmsimage from "../../../../../../assets/logo.png";

const Section = () => {
  return (
    <div className="p16 bgwhite rounded-5 b-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="rounded-5 cursor-pointer bgprimary p8 w-max">
            <FeatherIcon icon="edit" className="flex textwhite" size="16" />
          </div>
          <div className="rounded-5 cursor-pointer bgwarning p8 w-max">
            <FeatherIcon icon="trash-2" className="flex textwhite" size="16" />
          </div>
        </div>
        <div className="rounded-5 cursor-pointer secondarybtn px15 py4 w-max">
          <p className="textwhite fsize12">CMS</p>
        </div>
      </div>
      <div className="relative mtpx15 rounded-5 overflow-hidden">
        <img
          src={cmsimage}
          alt="cmsimage"
          className="w-full h_cms object-contain bg-fa"
        />
        <div className="rounded-5 bg-light-success px14 py2 w-max absolute top-0 right-0 m10">
          <p className="textsuccess fsize10">LIVE</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
