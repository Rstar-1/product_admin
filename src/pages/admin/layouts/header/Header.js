import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../../../redux/colorredux/ColorSlice";
import MobileSidebar from "../../sidebar/components/MobileSidebar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div className="bgwhite b-shadow border-h1 drawer">
      <div className="flex justify-between items-center px16 py10 md-py6 sm-py6 md-px8 sm-px8">
        <div
          className={
            sidebarshow === true
              ? "bg-glass-nav fixed top-0 hidden h-100 md-block sm-block z-99 navview"
              : "bg-glass-nav fixed top-0 hidden h-100 md-block sm-block z-99 navhide"
          }
        >
          <div className="bgwhite w-90 md-w-40 h-100 absolute right-0 top-0">
            <div className="bgprimary p10">
              <div className="flex items-center justify-between gap-4 plpx10 prpx10">
                <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  RS Developers
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setsidebarshow(false)}
                />
              </div>
            </div>
            <MobileSidebar />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <img
            src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png"
            alt="logo"
            className="header-logo rounded-full"
          />
          <div>
            <h1 className="fsize14 leading textdark md-fsize16 sm-fsize14 font-600 mtpx1 mbpx1">
              Super admin
            </h1>
            <p className="textgray fsize12 sm-fsize12 sm-fsize12 font-500">
              Welcome
            </p>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <FeatherIcon
            onClick={() => setsidebarshow(true)}
            icon="align-left"
            className="textgray hidden md-block sm-block cursor-pointer"
            size={18}
          />
          <FeatherIcon
            className="textgray hidden md-block sm-block cursor-pointer"
            size={18}
          />
          <NavLink to="automation">
            <FeatherIcon
              icon="settings"
              className="textgray hidden md-block sm-block cursor-pointer"
              size={18}
            />
          </NavLink>
          <FeatherIcon
            onClick={handleToggle}
            icon={darkMode ? "moon" : "sun"}
            className="textgray hidden md-block sm-block cursor-pointer"
            size={18}
          />
          <FeatherIcon
            icon="log-out"
            className="textgray hidden md-hidden sm-block cursor-pointer"
            size={18}
          />
          <NavLink to="automation">
            <button className="border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bgsecondary">
              <FeatherIcon
                icon="settings"
                className={darkMode ? "textdark flex" : "textwhite flex"}
                size={16}
              />
            </button>
          </NavLink>
          <button
            onClick={handleToggle}
            className={
              darkMode
                ? "border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bg-glass"
                : "border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bgsuccess"
            }
          >
            {darkMode ? (
              <>
                <FeatherIcon icon="moon" className="textdark flex" size={16} />
              </>
            ) : (
              <>
                <FeatherIcon icon="sun" className="textwhite flex" size={16} />
              </>
            )}
          </button>
          <button className="border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bgwarning">
            <FeatherIcon
              icon="log-out"
              className={darkMode ? "textdark flex" : "textwhite flex"}
              size={16}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
