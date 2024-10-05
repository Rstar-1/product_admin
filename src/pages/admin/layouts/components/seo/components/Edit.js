import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateseodata } from "../../../../../../redux/seoredux/SeoSlice";
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
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Keyword, setKeyword] = useState("");
  const [Description, setDescription] = useState("");
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

    if (Title.trim() === "") {
      newErrors.metatitle = "Enter Meta Title";
      valid = false;
    }
    if (Author.trim() === "") {
      newErrors.metaauthor = "Enter Meta Author";
      valid = false;
    }
    if (Keyword.trim() === "") {
      newErrors.metakeyword = "Enter Meta Keyword";
      valid = false;
    }
    if (Description.trim() === "") {
      newErrors.metadescription = "Enter Meta Description";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  // Validation Input

  // API useEffect
  useEffect(() => {
    const EditUser = async () => {
      setTitle(props.editshow.metatitle);
      setAuthor(props.editshow.metaauthor);
      setKeyword(props.editshow.metakeyword);
      setDescription(props.editshow.metadescription);
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
        metatitle: Title,
        metaauthor: Author,
        metakeyword: Keyword,
        metadescription: Description,
      };
      await dispatch(updateseodata({ id, data }));
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
            title="Edit Seo"
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
              placeholder="Enter Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
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
              placeholder="Enter Author"
              value={Author}
              onChange={(e) => setAuthor(e.target.value)}
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
              placeholder="Enter Keyword"
              value={Keyword}
              onChange={(e) => setKeyword(e.target.value)}
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
              placeholder="Enter Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
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

export default Edit;
