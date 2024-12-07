import React from "react";

const Section = () => {
  return (
    <div className="bgwhite rounded-5 b-shadow">
      {/* <div className="flex items-center justify-between">
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
      </div> */}
      <div className="relative rounded-5 overflow-hidden">
        <iframe
          // src="https://fabulous-pasca-19972a.netlify.app/"
          src="https://funny-stardust-39ecdf.netlify.app/"
          height="540"
          title="Iframe Example"
          className="w-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Section;
