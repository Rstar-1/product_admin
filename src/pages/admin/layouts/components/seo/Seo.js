import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import { useSelector, useDispatch } from "react-redux";
import {
  showseodata,
  deleteseodata,
} from "../../../../../redux/seoredux/SeoSlice";
import Nodata from "../../../../error/Nodata";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Banner from "../../../../components/Banner";

const Seo = () => {
  // Add Edit Popup
  const [addshow, setaddshow] = useState(false);
  const [editshow, seteditshow] = useState(false);
  // Add Edit Popup

  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.seodata);
  // Redux State

  // API
  useEffect(() => {
    dispatch(showseodata());
  }, [dispatch]);
  // API

  // Delete Data
  const handleDelete = async (id) => {
    try {
      const resultAction = await dispatch(deleteseodata(id));
      if (deleteseodata.fulfilled.match(resultAction)) {
        alert("Deleted successfully");
        dispatch(showseodata());
      } else {
        alert("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  // Delete Data

  return (
    <div className="cust-scroll ptpx12 pbpx90 px4 drawer">
      <div
        className={
          addshow
            ? "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navview"
            : "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navhide"
        }
      >
        <div className="bgwhite wid-sidebar h-100 absolute right-0 top-0">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                Add Seo
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => setaddshow(false)}
              />
            </div>
          </div>
          <Add />
        </div>
      </div>
      <div
        className={
          editshow
            ? "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navview"
            : "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navhide"
        }
      >
        <div className="bgwhite wid-sidebar h-100 absolute right-0 top-0">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                Edit Seo
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => seteditshow(false)}
              />
            </div>
          </div>
          <Edit editshow={editshow} />
        </div>
      </div>
      <Banner Title="Seo" Route="CMS" Original="Seo" />
      <div className="mtpx20 flex items-center justify-between">
        <div className="w-60 md-w-70 sm-w-90">
          <div className="relative">
            <input
              className="w-full bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Search"
            />
            <div className="absolute top-0 right-0 mtpx9 mrpx2">
              <FeatherIcon
                icon="search"
                className="textgray cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>
        <button
          className="primarybtn rounded-5 px16 py8 fsize14 cursor-pointer sm-hidden"
          onClick={() => setaddshow(true)}
        >
          Add
        </button>
      </div>

      <div className="border-ec sm-border-none rounded-5 px16 py18 sm-py1 sm-px1 sm-rounded-5 mtpx20 md-mtpx16 sm-mtpx14">
        <div className="table-w">
          {getdata.seodata && getdata.seodata.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Meta Title</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Meta Author</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Meta Keyword</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Meta Description</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Created At</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Updated At</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-colsm">
                    <p>Actions</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {getdata?.seodata.map((e) => (
                  <tr>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{e.metatitle}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{e.metaauthor}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{e.metakeyword}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{e.metadescription}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{new Date(e.createdAt).toDateString()}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{new Date(e.updatedAt).toDateString()}</p>
                    </td>
                    <td className="fsize13 textforth table-colsm">
                      <FeatherIcon
                        onClick={() => seteditshow(e)}
                        icon="edit"
                        className="textprimary mx3 cursor-pointer"
                        size={16}
                      />
                      <FeatherIcon
                        onClick={() => handleDelete(e._id)}
                        icon="trash-2"
                        className="textdanger cursor-pointer"
                        size={16}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Nodata />
          )}
        </div>
      </div>
    </div>
  );
};

export default Seo;
