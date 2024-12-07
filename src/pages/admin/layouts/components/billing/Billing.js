import React from "react";
import Banner from "../../../../components/Banner";
import logo from "../../../../../assets/logo.png";

const Billing = () => {
  return (
    <div className="cust-scroll ptpx12 pbpx90 px4 drawer">
      <Banner Title="Billing" Route="Management" Original="Billing" />
      <div className="flex sm-block gap-12 mtpx20 w-full items-start">
        <div className="w-70 md-w-60 sm-w-full grid-cols-1 gap-8">
          <div className="flex rounded-5 items-center justify-between py10 px20 sm-py8 sm-px12 bgwhite d-shadow rounded-5">
            <div className="flex items-center gap-9 w-90 md-w-80 sm-w-80">
              <div className="w-20 md-w-30 sm-w-30">
                <img
                  src={logo}
                  alt="bill-img"
                  className="bill-img bg-ec object-contain"
                />
              </div>
              <div className="w-80 md-w-70 sm-w-70">
                <h5 className="fsize16 sm-fsize14 textdark font-600 mtpx1 mbpx1">
                  CMS
                </h5>
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">1000</p>
              </div>
            </div>
            <div className="w-10 md-w-20 sm-w-20">
              <button className="primarybtn rounded-5 w-full py6 fsize14 cursor-pointer">
                Add
              </button>
            </div>
          </div>
          <div className="flex rounded-5 items-center justify-between py10 px20 sm-py8 sm-px12 bgwhite d-shadow rounded-5">
            <div className="flex items-center gap-9 w-90 md-w-80 sm-w-80">
              <div className="w-20 md-w-30 sm-w-30">
                <img
                  src={logo}
                  alt="bill-img"
                  className="bill-img bg-ec object-contain"
                />
              </div>
              <div className="w-80 md-w-70 sm-w-70">
                <h5 className="fsize16 sm-fsize14 textdark font-600 mtpx1 mbpx1">
                  CMS
                </h5>
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">1000</p>
              </div>
            </div>
            <div className="w-10 md-w-20 sm-w-20">
              <button className="primarybtn rounded-5 w-full py6 fsize14 cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-30 md-w-40 sm-w-full sm-mtpx20">
          <div className="bgwhite b-shadow px18 sm-px15 py8 rounded-5">
            <div className="py10 pl10 grid-cols-1 gap-4 bordb">
              <div className="flex items-center justify-between">
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">
                  Email Template
                </p>
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">100</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">CMS</p>
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">100</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">
                  Cloud Services
                </p>
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">100</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">CRM</p>
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">100</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">
                  Blog Management
                </p>
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">100</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">
                  Elearning Management
                </p>
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">100</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">
                  Blog Management
                </p>
                <p className="fsize12 textgray font-200 mtpx1 mbpx1">100</p>
              </div>
            </div>
            <div className="flex mtpx6 items-center p5 justify-between">
              <p className="fsize12 textforth font-200 mtpx1 mbpx1">
                Total Amount
              </p>
              <p className="fsize12 textsuccess font-200 mtpx1 mbpx1">100</p>
            </div>
            <div className="flex bg-fa items-center mtpx8 rounded-5 py8 px10 justify-between">
              <div>
                <h5 className="fsize14 textprimary font-600 mtpx1 mbpx1">
                  Payment Tracker
                </h5>
                <p className="fsize12 textgray font-200">100</p>
              </div>
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx15 prpx15 fsize13 bgprimary">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
