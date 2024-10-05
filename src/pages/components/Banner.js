import React from "react";

const Banner = (props) => {
  return (
    <div className="mtpx15">
      <h4 className="fsize18 leading mtpx1 mbpx1 textprimary">
        {props?.Title}
      </h4>
      <p className="fsize13 mtpx6 textgray font-400">
        Dashboard > {props?.Route} > {props?.Original}
      </p>
    </div>
  );
};

export default Banner;
