import React from 'react';
import FeatherIcon from "feather-icons-react";

const ApiSection = () => {
  return (
    <div className="">
      <div className="flex justify-between bgwhite items-center px16 py10 rounded-5 d-shadow">
        <p className="fsize14 textprimary font-600">Automate API</p>
        <FeatherIcon
          icon="chevron-right"
          className="textprimary flex"
          size={20}
        />
      </div>
      <div className="mtpx14 d-shadow w-full bgwhite rounded-5">
        <div className="px16 ptpx13 pbpx16">
          <h4 className="fsize15 textprimary font-500 mtpx1 mbpx1">
            API Information
          </h4>
          <div className="mtpx18 pbpx12 bordb flex gap-9 items-center flex-wrap">
            <p className="fsize11 font-600 textgray bg-ec rounded-20 px16 py1">
              Gallery
            </p>
            <p className="fsize11 font-600 textgray bg-ec rounded-20 px16 py1">
              Faq
            </p>
            <p className="fsize11 font-600 textgray bg-ec rounded-20 px16 py1">
              Events
            </p>
            <p className="fsize11 font-600 textgray bg-ec rounded-20 px16 py1">
              Services
            </p>
          </div>
          <div className="mtpx12 pbpx12 bordb flex gap-9 items-center flex-wrap">
            <p className="fsize11 font-600 textgray bg-ec rounded-20 px16 py1">
              Gallery
            </p>
            <p className="fsize11 font-600 textgray bg-ec rounded-20 px16 py1">
              Faq
            </p>
            <p className="fsize11 font-600 textgray bg-ec rounded-20 px16 py1">
              Events
            </p>
            <p className="fsize11 font-600 textgray bg-ec rounded-20 px16 py1">
              Services
            </p>
          </div>
        </div>
      </div>
      <div className="mtpx14 grid-cols-2 gap-12 mtpx12">
        <div className="rounded-5 d-shadow w-full bgwhite">
          <div className="py20">
            <h5 className="fsize32 textsuccess mtpx1 mbpx1 text-center">12</h5>
            <h6 className="fsize15 textgray leading font-600 mtpx1 mbpx1 text-center">
              Leads
            </h6>
            <p className="text-center fsize11 textgray">Leads of Month</p>
          </div>
        </div>
        <div className="rounded-5 d-shadow w-full bgwhite">
          <div className="py20">
            <h5 className="fsize32 textsuccess mtpx1 mbpx1 text-center">80</h5>
            <h6 className="fsize15 textgray leading font-600 mtpx1 mbpx1 text-center">
              Views
            </h6>
            <p className="text-center fsize11 textgray">Leads of Month</p>
          </div>
        </div>
      </div>
      <div className="mtpx14 d-shadow w-full bgwhite rounded-5">
        <div className="px16 ptpx13 pbpx16">
          <h4 className="fsize15 textprimary font-500 mtpx1 mbpx1">
            Social Media
          </h4>
          <div className="mtpx18 grid-cols-1 gap-12">
            <div className="flex items-center">
              <div className="flex items-center justify-center social-icon rounded-full bgprimary">
                <FeatherIcon
                  icon="facebook"
                  size={12}
                  className="flex textwhite"
                />
              </div>
              <div className="w-90">
                <p className="fsize13 font-400 textgray mlpx6">
                  www.https://facebook.com
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center social-icon rounded-full bgsecondary">
                <FeatherIcon
                  icon="instagram"
                  size={12}
                  className="flex textwhite"
                />
              </div>
              <div className="w-90">
                <p className="fsize13 font-400 textgray mlpx6">
                  www.https://facebook.com
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center social-icon rounded-full bginfo">
                <FeatherIcon
                  icon="twitter"
                  size={12}
                  className="flex textwhite"
                />
              </div>
              <div className="w-90">
                <p className="fsize13 font-400 textgray mlpx6">
                  www.https://facebook.com
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center social-icon rounded-full bgsuccess">
                <FeatherIcon
                  icon="phone"
                  size={12}
                  className="flex textwhite"
                />
              </div>
              <div className="w-90">
                <p className="fsize13 font-400 textgray mlpx6">
                  +91 9807654321
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center social-icon rounded-full bgsuccess">
                <FeatherIcon
                  icon="phone"
                  size={12}
                  className="flex textwhite"
                />
              </div>
              <div className="w-90">
                <p className="fsize13 font-400 textgray mlpx6">
                  +91 9807654321
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiSection
