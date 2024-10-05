import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addseodata } from "../../../../../../redux/seoredux/SeoSlice";
import AddSuccess from "../../popup/AddSuccess";
import Loader from "../../popup/Loader";
import Error from "../../../../../error/Error";

const Add = () => {
  // Popup State
  const [success, setsuccess] = useState(false);
  // Popup State

  // Redux State
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.seodata);
  // Redux State

  // Input State Management
  const [inputValue, setInputValue] = useState({
    metatitle: "",
    metaauthor: "",
    metakeyword: "",
    metadescription: "",
  });
  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log(e.target.name, "seo-target-data");
  };
  // Input State Management

  // Validation Input
  const [errors, setErrors] = useState({
    metatitle: "",
    metaauthor: "",
    metakeyword: "",
    metadescription: "",
  });
  const validateForm = () => {
    let valid = true;
    let newErrors = {
      metatitle: "",
      metaauthor: "",
      metakeyword: "",
      metadescription: "",
    };

    if (inputValue.metatitle.trim() === "") {
      newErrors.metatitle = "Enter Meta Title";
      valid = false;
    }
    if (inputValue.metaauthor.trim() === "") {
      newErrors.metaauthor = "Enter Meta Author";
      valid = false;
    }
    if (inputValue.metakeyword.trim() === "") {
      newErrors.metakeyword = "Enter Meta Keyword";
      valid = false;
    }
    if (inputValue.metadescription.trim() === "") {
      newErrors.metadescription = "Enter Meta Description";
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
      return true;
    }
    const resultAction = await dispatch(inputValue);
    if (addseodata.fulfilled.match(resultAction)) {
      setsuccess(true);
      setInputValue({
        metatitle: "",
        metaauthor: "",
        metakeyword: "",
        metadescription: "",
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
            title="Add Seo"
            description="placeholder text commonly used to demonstrate the visual form of a
            document or a typeface content."
          />
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="fsize14 textgray">Meta Title</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Meta Title"
              value={inputValue.metatitle}
              onChange={handleInput}
              name="metatitle"
            />
            {errors.metatitle && (
              <p className="textdanger mtpx6 fsize13">{errors.metatitle}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">Meta Author</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Meta Author"
              value={inputValue.metaauthor}
              onChange={handleInput}
              name="metaauthor"
            />
            {errors.metaauthor && (
              <p className="textdanger mtpx6 fsize13">{errors.metaauthor}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">Meta Keyword</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Meta Author"
              value={inputValue.metakeyword}
              onChange={handleInput}
              name="metakeyword"
            />
            {errors.metakeyword && (
              <p className="textdanger mtpx6 fsize13">{errors.metakeyword}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">Meta Description</label>
          <div className="mtpx8">
            <textarea
              className="side-input bgwhite textgray fsize14 rounded-5 plpx10 ptpx5 border-ec"
              placeholder="Enter Meta Author"
              value={inputValue.metadescription}
              onChange={handleInput}
              name="metadescription"
            ></textarea>
            {errors.metadescription && (
              <p className="textdanger mtpx6 fsize13">
                {errors.metadescription}
              </p>
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
