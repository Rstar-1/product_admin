import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import { useSelector, useDispatch } from "react-redux";
import {
  paginationreview,
  deletereview,
  statusreview,
} from "../../../../../redux/managementredux/ReviewSlice";
import ReactPaginate from "react-paginate";
import ReactStars from "react-rating-stars-component";
import Search from "../../../../components/Search";
import Nodata from "../../../../error/Nodata";
import Banner from "../../../../components/Banner";
import Edit from "./components/Edit";
import Add from "./components/Add";

const Review = () => {
  // Add Edit Status Delete Popup
  const [addshow, setaddshow] = useState(false);
  const [editshow, seteditshow] = useState(false);
  const [check, setCheck] = useState(1);
  // Add Edit Status Delete Popup

  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector(
    (state) => state.reviewdata.reviewdata.reviewstore
  );
  const totalCount = useSelector((state) => state.reviewdata.totalCount);
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
    dispatch(paginationreview({ offset: currentpage * 6, search }));
  }, [dispatch, currentpage, search]);
  // API useEffect

  // Delete Data
  const handleDelete = async (id) => {
    try {
      const resultAction = await dispatch(deletereview(id));
      if (deletereview.fulfilled.match(resultAction)) {
        alert("Deleted successfully");
        dispatch(paginationreview({ offset: currentpage * 6, search }));
      } else {
        alert("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  // Delete Data

  // Status
  const handlePublish = async (id, newstatus) => {
    try {
      const data = {
        status: newstatus,
      };
      await dispatch(statusreview({ id, data }));
      dispatch(paginationreview({ offset: currentpage * 6, search }));
      // Optionally handle success or failure here
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  // Status

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
                Add Review
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
                Edit Review
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
      <Banner Title="Review" Route="MyAdmin" Original="Review" />
      <div className="w-full bordb flex items-center mtpx16">
        <p
          onClick={() => setCheck(1)}
          className={
            check === 1
              ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
              : "fsize14 textgray cursor-pointer px16 pbpx6"
          }
        >
          Live Data
        </p>
        <p
          onClick={() => setCheck(2)}
          className={
            check === 2
              ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
              : "fsize14 textgray cursor-pointer px16 pbpx6"
          }
        >
          InActive
        </p>
      </div>
      <div className="mtpx20 flex items-center justify-between">
        <div className="w-60 md-w-70 sm-w-60">
          <Search search={search} change={handleSearchChange} />
        </div>
        <button
          className="primarybtn rounded-5 px16 py8 fsize14 cursor-pointer"
          onClick={() => setaddshow(true)}
        >
          Add
        </button>
      </div>
      {check === 1 ? (
        <>
          {/* ----------------- Desktop ------------------- */}
          <div className="border-ec sm-border-none rounded-5 px16 py18 sm-py1 sm-px1 sm-rounded-5 mtpx20 md-mtpx16 sm-mtpx14 sm-hidden">
            <div className="table-w rounded-5">
              {getdata && getdata.length > 0 ? (
                <table className="">
                  <thead>
                    <tr>
                      <th className="fsize13 textwhite font-300 table-colsm">
                        <p>Image</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Rating</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Title</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Sub Title</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Description</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Created At</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Updated At</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-colsm">
                        <p>Status</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-colsm">
                        <p>Actions</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getdata?.map((e) => (
                      <>
                        {e.status === true ? (
                          <>
                            <tr>
                              <td className="fsize13 textforth font-300 table-colsm">
                                <img
                                  src={e.picture}
                                  className="table-img"
                                  alt="table-img"
                                />
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <ReactStars
                                  count={5}
                                  value={e.rating}
                                  size={18}
                                  activeColor="#ffd700"
                                />
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <p>{e.title}</p>
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <p>{e.subtitle}</p>
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <p>{e.description}</p>
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <p>{new Date(e.createdAt).toDateString()}</p>
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <p>{new Date(e.updatedAt).toDateString()}</p>
                              </td>
                              <td className="fsize13 textforth font-300 table-colsm">
                                {e.status === true ? (
                                  <>
                                    <button
                                      className="border-0 cursor-pointer font-400 textsuccess rounded-20 fsize12 px12 py4 bg-light-success"
                                      onClick={() =>
                                        handlePublish(e._id, !e.status)
                                      }
                                    >
                                      Publish
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <button
                                      className="border-0 cursor-pointer font-400 textdanger rounded-20 fsize12 px12 py4 bg-light-danger"
                                      onClick={() =>
                                        handlePublish(e._id, !e.status)
                                      }
                                    >
                                      Unpublish
                                    </button>
                                  </>
                                )}
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
                          </>
                        ) : null}
                      </>
                    ))}
                  </tbody>
                </table>
              ) : (
                <Nodata />
              )}
            </div>
          </div>
          {/* ----------------- Desktop ------------------- */}

          {/* ----------------- Mobile ------------------- */}
          <div className="px16 py18 sm-py1 sm-px1 mtpx20 md-mtpx16 sm-mtpx14 hidden md-hidden sm-block">
            {getdata && getdata.length > 0 ? (
              <>
                {getdata?.map((e) => (
                  <>
                    {e.status === true ? (
                      <>
                        <div className="bgwhite d-shadow rounded-5 w-full mbpx10 relative">
                          <div className="p10">
                            <div className="flex items-center">
                              <div className="w-30">
                                <img
                                  src={e.picture}
                                  className="table-img rounded-5"
                                  alt="table-img "
                                />
                              </div>
                              <div className="w-70 px10">
                                <h6 className="fsize18 leading textprimary mtpx4 mbpx1 line-clamp1">
                                  {e.title}
                                </h6>
                                <p className="fsize10 textgray mtpx6 leading font-200 line-clamp2">
                                  {e.description}
                                </p>
                              </div>
                            </div>
                            <div className="mtpx10 grid-cols-2 gap-10">
                              <div>
                                <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                                  Start Date
                                </h6>
                                <p className="fsize10 textgray">
                                  {new Date(e.createdAt).toDateString()}
                                </p>
                              </div>
                              <div>
                                <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                                  End Date
                                </h6>
                                <p className="fsize10 textgray">
                                  {new Date(e.updatedAt).toDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="mtpx10">
                              <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                                Rating
                              </h6>
                              <ReactStars
                                count={5}
                                value={e.rating}
                                size={18}
                                activeColor="#ffd700"
                              />
                            </div>
                            <div className="mtpx10">
                              <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                                Sub Title
                              </h6>
                              <p className="fsize10 textgray">{e.subtitle}</p>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 m5 flex items-center">
                            {e.status === true ? (
                              <>
                                <div
                                  className="dot rounded-full bgsuccess"
                                  onClick={() =>
                                    handlePublish(e._id, !e.status)
                                  }
                                ></div>
                              </>
                            ) : (
                              <>
                                <div
                                  className="dot rounded-full bgdanger"
                                  onClick={() =>
                                    handlePublish(e._id, !e.status)
                                  }
                                ></div>
                              </>
                            )}
                            <FeatherIcon
                              onClick={() => seteditshow(e)}
                              icon="edit"
                              className="textprimary mx6 cursor-pointer"
                              size={14}
                            />
                            <FeatherIcon
                              onClick={() => handleDelete(e._id)}
                              icon="trash-2"
                              className="textdanger cursor-pointer"
                              size={14}
                            />
                          </div>
                        </div>
                      </>
                    ) : null}
                  </>
                ))}
              </>
            ) : (
              <Nodata />
            )}
          </div>
          {/* ----------------- Mobile ------------------- */}
        </>
      ) : null}

      {check === 2 ? (
        <>
          {/* ----------------- Desktop ------------------- */}
          <div className="border-ec sm-border-none rounded-5 px16 py18 sm-py1 sm-px1 sm-rounded-5 mtpx20 md-mtpx16 sm-mtpx14 sm-hidden">
            <div className="table-w rounded-5">
              {getdata && getdata.length > 0 ? (
                <table className="">
                  <thead>
                    <tr>
                      <th className="fsize13 textwhite font-300 table-colsm">
                        <p>Image</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Rating</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Title</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Sub Title</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Description</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Created At</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-collg">
                        <p>Updated At</p>
                      </th>
                      <th className="fsize13 textwhite font-300 table-colsm">
                        <p>Status</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getdata?.map((e) => (
                      <>
                        {e.status === false ? (
                          <>
                            <tr>
                              <td className="fsize13 textforth font-300 table-colsm">
                                <img
                                  src={e.picture}
                                  className="table-img"
                                  alt="table-img"
                                />
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <ReactStars
                                  count={5}
                                  value={e.rating}
                                  size={18}
                                  activeColor="#ffd700"
                                />
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <p>{e.title}</p>
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <p>{e.subtitle}</p>
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <p>{e.description}</p>
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <p>{new Date(e.createdAt).toDateString()}</p>
                              </td>
                              <td className="fsize13 textforth font-300 table-collg">
                                <p>{new Date(e.updatedAt).toDateString()}</p>
                              </td>
                              <td className="fsize13 textforth font-300 table-colsm">
                                {e.status === true ? (
                                  <>
                                    <button
                                      className="border-0 cursor-pointer font-400 textsuccess rounded-20 fsize12 px12 py4 bg-light-success"
                                      onClick={() =>
                                        handlePublish(e._id, !e.status)
                                      }
                                    >
                                      Publish
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <button
                                      className="border-0 cursor-pointer font-400 textdanger rounded-20 fsize12 px12 py4 bg-light-danger"
                                      onClick={() =>
                                        handlePublish(e._id, !e.status)
                                      }
                                    >
                                      Unpublish
                                    </button>
                                  </>
                                )}
                              </td>
                            </tr>
                          </>
                        ) : null}
                      </>
                    ))}
                  </tbody>
                </table>
              ) : (
                <Nodata />
              )}
            </div>
          </div>
          {/* ----------------- Desktop ------------------- */}

          {/* ----------------- Mobile ------------------- */}
          <div className="px16 py18 sm-py1 sm-px1 mtpx20 md-mtpx16 sm-mtpx14 hidden md-hidden sm-block">
            {getdata && getdata.length > 0 ? (
              <>
                {getdata?.map((e) => (
                  <>
                    {e.status === false ? (
                      <>
                        <div className="bgwhite d-shadow rounded-5 w-full mbpx10 relative">
                          <div className="p10">
                            <div className="flex items-center">
                              <div className="w-30">
                                <img
                                  src={e.picture}
                                  className="table-img rounded-5"
                                  alt="table-img "
                                />
                              </div>
                              <div className="w-70 px10">
                                <h6 className="fsize18 leading textprimary mtpx4 mbpx1 line-clamp1">
                                  {e.title}
                                </h6>
                                <p className="fsize10 textgray mtpx6 leading font-200 line-clamp2">
                                  {e.description}
                                </p>
                              </div>
                            </div>
                            <div className="mtpx10 grid-cols-2 gap-10">
                              <div>
                                <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                                  Start Date
                                </h6>
                                <p className="fsize10 textgray">
                                  {new Date(e.createdAt).toDateString()}
                                </p>
                              </div>
                              <div>
                                <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                                  End Date
                                </h6>
                                <p className="fsize10 textgray">
                                  {new Date(e.updatedAt).toDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="mtpx10">
                              <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                                Rating
                              </h6>
                              <ReactStars
                                count={5}
                                value={e.rating}
                                size={18}
                                activeColor="#ffd700"
                              />
                            </div>
                            <div className="mtpx10">
                              <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                                Sub Title
                              </h6>
                              <p className="fsize10 textgray">{e.subtitle}</p>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 m10 flex items-center">
                            {e.status === true ? (
                              <>
                                <div
                                  className="dot rounded-full bgsuccess"
                                  onClick={() =>
                                    handlePublish(e._id, !e.status)
                                  }
                                ></div>
                              </>
                            ) : (
                              <>
                                <div
                                  className="dot rounded-full bgdanger"
                                  onClick={() =>
                                    handlePublish(e._id, !e.status)
                                  }
                                ></div>
                              </>
                            )}
                          </div>
                        </div>
                      </>
                    ) : null}
                  </>
                ))}
              </>
            ) : (
              <Nodata />
            )}
          </div>
          {/* ----------------- Mobile ------------------- */}
        </>
      ) : null}

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

export default Review;
