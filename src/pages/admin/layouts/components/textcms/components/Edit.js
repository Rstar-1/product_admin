import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatecmstextdata } from "../../../../../../redux/cmsredux/TextSlice";
import EditSuccess from "../../popup/EditSuccess";
import Loader from "../../popup/Loader";
import Error from "../../../../../error/Error";

const Edit = (props) => {
  // Popup State
  const [success, setsuccess] = useState(false);
  // Popup State

  // Redux State
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.seodata);
  let id = props.editshow._id;
  // Redux State

  // Input State Management
  const [SectionId, setSectionId] = useState("");
  const [SectionName, setSectionName] = useState("");
  const [CmsData, setCmsData] = useState("");
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

    if (SectionId.trim() === "") {
      newErrors.sectionid = "Enter Meta Title";
      valid = false;
    }
    if (SectionName.trim() === "") {
      newErrors.sectionname = "Enter Meta Author";
      valid = false;
    }
    if (CmsData.trim() === "") {
      newErrors.cmsdata = "Enter Meta Keyword";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  // Validation Input

  // API useEffect
  useEffect(() => {
    const EditUser = async () => {
      setSectionId(props.editshow.sectionid);
      setSectionName(props.editshow.sectionname);
      setCmsData(props.editshow.cmsdata);
    };
    EditUser();
  }, [dispatch, id, props.editshow]);
  // API useEffect

  // Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = {
        sectionid: SectionId,
        sectionname: SectionName,
        cmsdata: CmsData,
      };
      await dispatch(updatecmstextdata({ id, data }));
      setsuccess(true);
    } catch (error) {
      console.error("Error updating user:", error);
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
          <EditSuccess
            title="Text CMS"
            description="placeholder text commonly used to demonstrate the visual form of a
            document or a typeface content."
          />
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="fsize14 textgray">Section Id</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Section Id"
              value={SectionId}
              onChange={(e) => setSectionId(e.target.value)}
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
              value={SectionName}
              onChange={(e) => setSectionName(e.target.value)}
              name="sectionname"
            />
            {errors.sectionname && (
              <p className="textdanger mtpx6 fsize13">{errors.sectionname}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">Cms Data</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Cms Data"
              value={CmsData}
              onChange={(e) => setCmsData(e.target.value)}
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

export default Edit;
