import React, { useState } from "react";
import Banner from "../../../../components/Banner";
import FeatherIcon from "feather-icons-react";

const Projects = () => {
    const [check, setCheck] = useState(1);
  return (
    <div className="cust-scroll py12 px4">
      <Banner Title="Projects" Route="Dashboard" Original="Projects" />
      <div className="w-full bordb flex items-center mtpx16">
        <p
          onClick={() => setCheck(1)}
          className={
            check === 1
              ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
              : "fsize14 textgray cursor-pointer px16 pbpx6"
          }
        >
          Ecommerce
        </p>
        <p
          onClick={() => setCheck(2)}
          className={
            check === 2
              ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
              : "fsize14 textgray cursor-pointer px16 pbpx6"
          }
        >
          Portfolio
        </p>
        <p
          onClick={() => setCheck(3)}
          className={
            check === 3
              ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
              : "fsize14 textgray cursor-pointer px16 pbpx6"
          }
        >
          Elearning
        </p>
      </div>
      <div className="grid-cols-3 gap-12 mtpx12">
        <div className="bgwhite b-shadow rounded-5">
          <div className="p20">
            <div className="flex items-center w-full">
              <div className="w-30">
                <img
                  src="https://cdn.prod.website-files.com/5daaade3e3e3f04da71daa8e/605c77946bd2992bb49efd7c_fashion.png"
                  alt="projects"
                  className="project-img w-full object-contain bg-ec rounded-5"
                />
              </div>
              <div className="w-70">
                <div className="px10">
                  <p className="fsize11 textgray font-100">Lorem</p>
                  <h4 className="fsize15 my1 leading textprimary">
                    Krishi Engennering
                  </h4>

                  <p className="fsize10 mtpx8 textdanger bg-light-danger px12 rounded-20 w-max font-400">
                    Projects
                  </p>
                </div>
              </div>
            </div>
            <div className="mtpx12 grid-cols-2 gap-4">
              <div>
                <h4 className="fsize14 leading my1 textprimary font-600">
                  Starting At
                </h4>
                <p className="fsize12 mtpx4 textgray font-100">
                  Mon Nov 04 2024
                </p>
              </div>
              <div>
                <h4 className="fsize14 leading my1 textprimary font-600">
                  Expense
                </h4>
                <p className="fsize12 mtpx4 textgray font-100">₹1200</p>
              </div>
            </div>
            <div className="mtpx14">
              <h4 className="textprimary my1 leading fsize14 font-500">
                Requirements
              </h4>
              <div className="mtpx12 flex items-center flex-wrap gap-8">
                <p className="fsize10 textgray bg-ec px12 rounded-5 w-max font-400">
                  Visiting Card
                </p>
                <p className="fsize10 textgray bg-ec px12 rounded-5 w-max font-400">
                  Website
                </p>
                <p className="fsize10 textgray bg-ec px12 rounded-5 w-max font-400">
                  Admin
                </p>
                <p className="fsize10 textgray bg-ec px12 rounded-5 w-max font-400">
                  Digital Card
                </p>
              </div>
            </div>
            <div className="mtpx14 flex items-center gap-8">
              <div className="flex items-center justify-center social-icon rounded-5 bgprimary">
                <FeatherIcon
                  icon="facebook"
                  size={12}
                  className="flex textwhite"
                />
              </div>
              <div className="flex items-center justify-center social-icon rounded-5 bgsecondary">
                <FeatherIcon
                  icon="instagram"
                  size={12}
                  className="flex textwhite"
                />
              </div>
              <div className="flex items-center justify-center social-icon rounded-5 bginfo">
                <FeatherIcon
                  icon="twitter"
                  size={12}
                  className="flex textwhite"
                />
              </div>
              <div className="flex items-center justify-center social-icon rounded-5 bgsuccess">
                <FeatherIcon
                  icon="phone"
                  size={12}
                  className="flex textwhite"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
