import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../../../assets/logo.png";
import sidebarmenu from "./components/NavData";

const Sidebar = () => {
  const navigate = useNavigate();
  const reloadPage = (e) => {
    navigate(e.route);
    window.location.reload();
  };
  const reloadPage2 = (e) => {
    navigate(e.route);
    window.location.reload();
  };
  
  return (
    <div className="bgcard h-100 overflow-auto relative sidebar b-shadow">
      <div className="">
        <div className="flex justify-center py5">
          <img src={logo} alt="logo" className="sidebar-logo object-contain" />
        </div>
        <div className="pbpx10">
          <div className="grid grid-cols-1 px10">
            {sidebarmenu.map((e) => (
              <>
                <div className="">
                  {e.dropdown.length > 0 ? (
                    <>
                      <div className="accordion">
                        <div className="tab">
                          <input
                            type="checkbox"
                            name={e.accordian}
                            id={e.tabId}
                          />
                          <label
                            htmlFor={e.tabId}
                            className="py10 px12 cursor-pointer flex justify-between items-center textforth font-300"
                          >
                            <div className="flex items-center gap-4">
                              <FeatherIcon
                                icon={e.icon}
                                className="textgray cursor-pointer"
                                size={16}
                              />
                              <p className="fsize13 textgray mtpx2 font-300 plpx4">
                                {e.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <p className="fsize12 dot-dash rounded-full flex items-center justify-center textwhite bgprimary">
                                {e.dropdown.length}
                              </p>
                              <FeatherIcon size="16" icon="chevron-right" />
                            </div>
                          </label>
                          <div className="tab__content">
                            <div className="grid grid-cols-1 px2">
                              {e.dropdown.map((drop) => (
                                <NavLink
                                  activeClassName="active"
                                  className="flex items-center activesidebar py7 px10 rounded-5 gap-9"
                                  onClick={() => reloadPage2(drop)}
                                  to={drop.route}
                                >
                                  <FeatherIcon
                                    icon={drop.icon}
                                    className="flex cursor-pointer"
                                    size={11}
                                  />
                                  <p className="fsize13 font-300">
                                    {drop.name}
                                  </p>
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <NavLink
                        activeClassName="active"
                        className="flex items-center rounded-5 activesidebar px12 py8 gap-9"
                        onClick={() => reloadPage(e)}
                        to={e.route}
                      >
                        <FeatherIcon
                          icon={e.icon}
                          className="cursor-pointer flex"
                          size={16}
                        />
                        <p className="fsize13 text-side mtpx2 font-300">
                          {e.name}
                        </p>
                      </NavLink>
                    </>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
