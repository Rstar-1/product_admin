import React from "react";
import DashGraph from "./DashGraph";

const DashSection = () => {
  
  return (
    <div>
      <div className="grid-cols-2 gap-12">
        <div className="p20 bgprimary b-shadow rounded-5">
          <div className="flex items-center">
            <div className="w-60">
              <h2 className="fsize22 mtpx1 mbpx1 textwhite">Welcome Back</h2>
              <p className="fsize14 textwhite">Dashboard</p>
              <div className="grid-cols-2 mtpx16">
                <div>
                  <p className="fsize18 font-600 textwhite">20 +</p>
                  <p className="fsize12 textwhite">Website</p>
                </div>
                <div>
                  <p className="fsize18 font-600 textwhite">23 +</p>
                  <p className="fsize12 textwhite">App Design</p>
                </div>
              </div>
            </div>
            <div className="w-40">
              <img
                src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-3.png"
                alt="dash-img"
                className="dash-img object-contain"
              />
            </div>
          </div>
        </div>
        <div className="p20 bgprimary b-shadow rounded-5">
          <div className="flex items-center">
            <div className="w-60">
              <h2 className="fsize22 mtpx1 mbpx1 textwhite">Welcome Back</h2>
              <p className="fsize14 textwhite">Dashboard</p>
              <div className="grid-cols-2 mtpx16">
                <div>
                  <p className="fsize18 font-600 textwhite">230 +</p>
                  <p className="fsize12 textwhite">Catelouge</p>
                </div>
                <div>
                  <p className="fsize18 font-600 textwhite">230 +</p>
                  <p className="fsize12 textwhite">Digital Card</p>
                </div>
              </div>
            </div>
            <div className="w-40">
              <img
                src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-1.png"
                alt="dash-img"
                className="dash-img object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mtpx20">
        <DashGraph />
      </div>
    </div>
  );
};

export default DashSection;
