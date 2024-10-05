import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addcmstextdata } from "../../../../../../redux/cmsredux/TextSlice";
import AddSuccess from "../../popup/AddSuccess";
import Loader from "../../popup/Loader";
import Error from "../../../../../error/Error";

const Add = () => {
  // Popup State
  const [success, setsuccess] = useState(false);
  // Popup State

  // Redux State
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.cmstextdata);
  // Redux State

  // Input State Management
  const [inputValue, setInputValue] = useState({
    sectionid: "",
    sectionname: "",
    cmsdata: "",
  });
  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log(e.target.name, "seo-target-data");
  };
  // Input State Management

  // Validation Input
  const [errors, setErrors] = useState({
    sectionid: "",
    sectionname: "",
    cmsdata: "",
  });
  const validateForm = () => {
    let valid = true;
    let newErrors = {
      sectionid: "",
      sectionname: "",
      cmsdata: "",
    };

    if (inputValue.sectionid.trim() === "") {
      newErrors.sectionid = "Enter Section ID";
      valid = false;
    }
    if (inputValue.sectionname.trim() === "") {
      newErrors.sectionname = "Enter Section Name";
      valid = false;
    }
    if (inputValue.cmsdata.trim() === "") {
      newErrors.cmsdata = "Enter CMS Data";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  // Validation Input

  // Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const resultAction = await dispatch(addcmstextdata(inputValue));
    if (addcmstextdata.fulfilled.match(resultAction)) {
      setsuccess(true);
      setInputValue({
        sectionid: "",
        sectionname: "",
        cmsdata: "",
      });
    } else {
      alert(
        "Failed to add SEO data: " + (resultAction.payload || "Unknown error")
      );
    }
  };
  // Submit Data

  // Loading and Error
  if (loading) {
    return (
      <div className="flex justify-center items-center h-100">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-100">
        <Error />
      </div>
    );
  }
  // Loading and Error

  return (
    <div className="p20 cust-scroll">
      {success ? (
        <div className="fixed flex justify-center items-center bg-glass top-0 left-0 h-100 z-999 w-full">
          <AddSuccess
            title="Text CMS"
            description="placeholder text commonly used to demonstrate the visual form of a
            document or a typeface content."
          />
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="fsize14 textgray">SectionID</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter SectionID"
              value={inputValue.sectionid}
              onChange={handleInput}
              name="sectionid"
            />
            {errors.sectionid && (
              <p className="textdanger mtpx6 fsize13">{errors.sectionid}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">Section Name</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Section Name"
              value={inputValue.sectionname}
              onChange={handleInput}
              name="sectionname"
            />
            {errors.sectionname && (
              <p className="textdanger mtpx6 fsize13">{errors.sectionname}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">CMS Data</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter CMS Data"
              value={inputValue.cmsdata}
              onChange={handleInput}
              name="cmsdata"
            />
            {errors.cmsdata && (
              <p className="textdanger mtpx6 fsize13">{errors.cmsdata}</p>
            )}
          </div>
        </div>
        <div className="mtpx15 flex justify-center">
          <button
            type="submit"
            className="border-0 cursor-pointer w-full font-500 textwhite ptpx10 pbpx10 md-ptpx6 md-pbpx6 md-plpx16 md-prpx16 sm-ptpx8 sm-pbpx8 sm-plpx16 sm-prpx16 plpx25 prpx25 fsize14 rounded-5 bgprimary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
