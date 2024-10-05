import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import { useSelector, useDispatch } from "react-redux";
import { paginationcmstextdata } from "../../../../../redux/cmsredux/TextSlice";
import ReactPaginate from "react-paginate";
import Search from "../../../../components/Search";
import Nodata from "../../../../error/Nodata";
import Banner from "../../../../components/Banner";
import Edit from "./components/Edit";
import Add from "./components/Add";

const TextCms = () => {
  // Add Edit Popup
  const [addshow, setaddshow] = useState(false);
  const [editshow, seteditshow] = useState(false);
  // Add Edit Popup

  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector(
    (state) => state.cmstextdata.cmstextdata.cmsstore
  );
  const totalCount = useSelector((state) => state.cmstextdata.totalCount);
  // Redux State

  // Pagination and Search
  const [currentpage, setcurrentpage] = useState(0);
  const [search, setSearch] = useState("");
  // Pagination and Search

  // Pagination and Search Function
  const handlePageClick = (e) => {
    setcurrentpage(e.selected);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setcurrentpage(0); // Reset to first page on new search
  };
  // Pagination and Search Function

  // API useEffect
  useEffect(() => {
    dispatch(paginationcmstextdata({ offset: currentpage * 6, search }));
  }, [dispatch, currentpage, search]);
  // API useEffect

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
                Add Text Cms
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
                Edit Text Cms
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
      <Banner Title="Text CMS" Route="CMS" Original="Text CMS" />
      <div className="mtpx20 flex items-center justify-between">
        <div className="w-60 md-w-70 sm-w-90">
          <Search search={search} change={handleSearchChange} />
        </div>
        <button
          className="primarybtn rounded-5 px16 py8 fsize14 cursor-pointer sm-hidden"
          onClick={() => setaddshow(true)}
        >
          Add
        </button>
      </div>
      <div className="border-ec sm-border-none rounded-5 px16 py18 sm-py1 sm-px1 sm-rounded-5 mtpx20 md-mtpx16 sm-mtpx14">
        <div className="table-w rounded-5">
          {getdata && getdata.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="fsize13 textwhite font-300 table-colsm">
                    <p>SectionID</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Section Name</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>CMS Data</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Created At</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Created At</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-colsm">
                    <p>Actions</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {getdata?.map((e) => (
                  <tr>
                    <td className="fsize13 textforth font-300 table-colsm">
                      <p>{e.sectionid}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{e.sectionname}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{e.cmsdata}</p>
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
      <div className="flex w-full justify-end mtpx12">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageCount={Math.ceil(totalCount / 6)}
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          renderOnZeroPageCount={null}
          forcePage={currentpage}
        />
      </div>
    </div>
  );
};

export default TextCms;
