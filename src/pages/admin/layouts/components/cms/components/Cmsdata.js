import React, { useState } from "react";
import Nodata from "../../../../../error/Nodata";

const Cmsdata = () => {
  const [check, setCheck] = useState(1);
  return (
    <div className="p16 bgwhite rounded-5 b-shadow">
      <div>
        <h4 className="fsize18 textprimary my1">Section</h4>
        <div className="mtpx8 grid-cols-1 bg-ec rounded-5 p14">
          <div className="flex items-center">
            <p className="fsize12 textdark font-600">Section ID:</p>
            <p className="fsize12 textgray mlpx5">AboutSection</p>
          </div>
          <div className="flex items-center mtpx2">
            <p className="fsize12 textdark font-600">Section Name:</p>
            <p className="fsize12 textgray mlpx5">AboutSection</p>
          </div>
        </div>
      </div>
      <div className="mtpx16">
        <h4 className="fsize14 textprimary my1">CMS</h4>
        <div className="w-full bordb flex items-center mtpx8">
          <p
            onClick={() => setCheck(1)}
            className={
              check === 1
                ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                : "fsize14 textgray cursor-pointer px16 pbpx6"
            }
          >
            Text
          </p>
          <p
            onClick={() => setCheck(2)}
            className={
              check === 2
                ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                : "fsize14 textgray cursor-pointer px16 pbpx6"
            }
          >
            Image
          </p>
        </div>
        <Nodata />
      </div>
    </div>
  );
};

export default Cmsdata;
