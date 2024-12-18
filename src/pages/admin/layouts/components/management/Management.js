import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { useSelector, useDispatch } from "react-redux";
import {
  paginationteammanagement,
  paginationservicemanagement,
  paginationgallerymanagement,
  paginationclientmanagement,
  paginationfaqmanagement,
  paginationeventmanagement,
  deletemanagement,
  statusmanagement,
} from "../../../../../redux/managementredux/ManagementSlice";
import { showapidata } from "../../../../../redux/apiredux/ApiSlice";
import ReactPaginate from "react-paginate";
import Search from "../../../../components/Search";
import Nodata from "../../../../error/Nodata";
import Banner from "../../../../components/Banner";
import AddManagement from "./components/Add";
import EditManagement from "./components/Edit";

const Management = () => {
  // Add Edit Status Delete Popup
  const [addshow, setaddshow] = useState(false);
  const [editshow, seteditshow] = useState(false);
  const [paginations, setpaginations] = useState(true);
  // Add Edit Status Delete Popup

  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector((state) => {
    if (window.location.pathname.includes("team")) {
      return state.managementdata.managementdata.managementteamstore;
    } else if (window.location.pathname.includes("service")) {
      return state.managementdata.managementdata.managementservicestore;
    } else if (window.location.pathname.includes("gallery")) {
      return state.managementdata.managementdata.managementgallerystore;
    } else if (window.location.pathname.includes("client")) {
      return state.managementdata.managementdata.managementclientstore;
    } else if (window.location.pathname.includes("faq")) {
      return state.managementdata.managementdata.managementfaqstore;
    } else if (window.location.pathname.includes("event")) {
      return state.managementdata.managementdata.managementeventstore;
    }
  });
  const totalCount = useSelector((state) => {
    if (window.location.pathname.includes("team")) {
      return state.managementdata.totalCount;
    } else if (window.location.pathname.includes("service")) {
      return state.managementdata.totalCount;
    } else if (window.location.pathname.includes("gallery")) {
      return state.managementdata.totalCount;
    } else if (window.location.pathname.includes("client")) {
      return state.managementdata.totalCount;
    } else if (window.location.pathname.includes("faq")) {
      return state.managementdata.totalCount;
    } else if (window.location.pathname.includes("event")) {
      return state.managementdata.totalCount;
    }
  });
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
    dispatch(showapidata());
    if (window.location.pathname.includes("team")) {
      dispatch(
        paginationteammanagement({
          offset: currentpage * 6,
          search,
          pagination: paginations,
        })
      );
    } else if (window.location.pathname.includes("service")) {
      dispatch(
        paginationservicemanagement({
          offset: currentpage * 6,
          search,
          pagination: paginations,
        })
      );
    } else if (window.location.pathname.includes("gallery")) {
      dispatch(
        paginationgallerymanagement({
          offset: currentpage * 6,
          search,
          pagination: paginations,
        })
      );
    } else if (window.location.pathname.includes("client")) {
      dispatch(
        paginationclientmanagement({
          offset: currentpage * 6,
          search,
          pagination: paginations,
        })
      );
    } else if (window.location.pathname.includes("faq")) {
      dispatch(
        paginationfaqmanagement({
          offset: currentpage * 6,
          search,
          pagination: paginations,
        })
      );
    } else if (window.location.pathname.includes("event")) {
      dispatch(
        paginationeventmanagement({
          offset: currentpage * 6,
          search,
          pagination: paginations,
        })
      );
    }
  }, [dispatch, currentpage, search]);
  // API useEffect

  // Delete Data
  const handleDelete = async (id) => {
    try {
      let resultAction;

      if (window.location.pathname.includes("team")) {
        resultAction = await dispatch(deletemanagement(id));
        if (deletemanagement.fulfilled.match(resultAction)) {
          alert("Deleted successfully");
          dispatch(
            paginationteammanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to delete item");
        }
      } else if (window.location.pathname.includes("service")) {
        resultAction = await dispatch(deletemanagement(id));
        if (deletemanagement.fulfilled.match(resultAction)) {
          alert("Deleted successfully");
          dispatch(
            paginationservicemanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to delete item");
        }
      } else if (window.location.pathname.includes("gallery")) {
        resultAction = await dispatch(deletemanagement(id));
        if (deletemanagement.fulfilled.match(resultAction)) {
          alert("Deleted successfully");
          dispatch(
            paginationgallerymanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to delete item");
        }
      } else if (window.location.pathname.includes("client")) {
        resultAction = await dispatch(deletemanagement(id));
        if (deletemanagement.fulfilled.match(resultAction)) {
          alert("Deleted successfully");
          dispatch(
            paginationclientmanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to delete item");
        }
      } else if (window.location.pathname.includes("faq")) {
        resultAction = await dispatch(deletemanagement(id));
        if (deletemanagement.fulfilled.match(resultAction)) {
          alert("Deleted successfully");
          dispatch(
            paginationfaqmanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to delete item");
        }
      } else if (window.location.pathname.includes("event")) {
        resultAction = await dispatch(deletemanagement(id));
        if (deletemanagement.fulfilled.match(resultAction)) {
          alert("Deleted successfully");
          dispatch(
            paginationeventmanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to delete item");
        }
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

      let resultAction;

      if (window.location.pathname.includes("team")) {
        resultAction = await dispatch(statusmanagement({ id, data }));
        if (statusmanagement.fulfilled.match(resultAction)) {
          // alert("Published successfully");
          dispatch(
            paginationteammanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to publish");
        }
      } else if (window.location.pathname.includes("service")) {
        resultAction = await dispatch(statusmanagement({ id, data }));
        if (statusmanagement.fulfilled.match(resultAction)) {
          // alert("Published successfully");
          dispatch(
            paginationservicemanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to publish");
        }
      } else if (window.location.pathname.includes("gallery")) {
        resultAction = await dispatch(statusmanagement({ id, data }));
        if (statusmanagement.fulfilled.match(resultAction)) {
          // alert("Published successfully");
          dispatch(
            paginationgallerymanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to publish");
        }
      } else if (window.location.pathname.includes("client")) {
        resultAction = await dispatch(statusmanagement({ id, data }));
        if (statusmanagement.fulfilled.match(resultAction)) {
          // alert("Published successfully");
          dispatch(
            paginationclientmanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to publish");
        }
      } else if (window.location.pathname.includes("faq")) {
        resultAction = await dispatch(statusmanagement({ id, data }));
        if (statusmanagement.fulfilled.match(resultAction)) {
          // alert("Published successfully");
          dispatch(
            paginationfaqmanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to publish");
        }
      } else if (window.location.pathname.includes("event")) {
        resultAction = await dispatch(statusmanagement({ id, data }));
        if (statusmanagement.fulfilled.match(resultAction)) {
          // alert("Published successfully");
          dispatch(
            paginationeventmanagement({ offset: currentpage * 6, search })
          );
        } else {
          alert("Failed to publish");
        }
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  // Status

  // Navigate
  const navigate = useNavigate();
  const handleStatus = () => {
    if (window.location.pathname.includes("team")) {
      navigate("/unpublished_team");
    } else if (window.location.pathname.includes("service")) {
      navigate("/unpublished_service");
    } else if (window.location.pathname.includes("team")) {
      navigate("/unpublished_gallery");
    } else if (window.location.pathname.includes("gallery")) {
      navigate("/unpublished_gallery");
    } else if (window.location.pathname.includes("client")) {
      navigate("/unpublished_client");
    } else if (window.location.pathname.includes("faq")) {
      navigate("/unpublished_faq");
    } else if (window.location.pathname.includes("event")) {
      navigate("/unpublished_event");
    }
  };
  // Navigate

  // Banner
  const getBannerProps = () => {
    if (window.location.pathname.includes("team")) {
      return { Title: "Teams", Original: "Teams" };
    } else if (window.location.pathname.includes("service")) {
      return { Title: "Service", Original: "Service" };
    } else if (window.location.pathname.includes("gallery")) {
      return { Title: "Gallery", Original: "Gallery" };
    } else if (window.location.pathname.includes("client")) {
      return { Title: "Clients", Original: "Clients" };
    } else if (window.location.pathname.includes("faq")) {
      return { Title: "Faq", Original: "Faq" };
    } else if (window.location.pathname.includes("event")) {
      return { Title: "Events", Original: "Events" };
    } else {
      return { Title: "Default Page", Original: "Default" };
    }
  };
  const bannerProps = getBannerProps();
  // Banner

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
                Add {bannerProps.Title}
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => setaddshow(false)}
              />
            </div>
          </div>
          <AddManagement />
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
                Edit {bannerProps.Title}
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => seteditshow(false)}
              />
            </div>
          </div>
          <EditManagement editshow={editshow} />
        </div>
      </div>
      <Banner
        Title={bannerProps.Title}
        Route="Management"
        Original={bannerProps.Original}
      />
      <div className="mtpx20 flex items-center justify-between">
        <div className="w-60 md-w-60 sm-w-40">
          <Search search={search} change={handleSearchChange} />
        </div>
        <div className="flex items-center gap-8">
          <button
            className="primarybtn rounded-5 px16 py8 sm-py6 fsize14 cursor-pointer"
            onClick={() => setaddshow(true)}
          >
            Add
          </button>
          <button
            className="secondarybtn rounded-5 p12 sm-p10 fsize14 cursor-pointer"
            onClick={() => handleStatus()}
          >
            <FeatherIcon icon="trash-2" className="flex" size={16} />
          </button>
        </div>
      </div>

      {/* ----------------- Desktop ------------------- */}
      <div className="border-ec sm-border-none rounded-5 px16 py18 sm-py1 sm-px1 sm-rounded-5 mtpx20 md-mtpx16 sm-mtpx14 sm-hidden">
        <div className="table-w rounded-5">
          {getdata && getdata.length > 0 ? (
            <table className="">
              <thead>
                <tr>
                  <th className="fsize13 textwhite font-300 table-colsm">
                    <p>SectionId</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-colsm">
                    <p>Image</p>
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
                  <tr>
                    <td className="fsize13 textforth font-300 table-colsm">
                      <p>{e?.sectionid}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-colsm">
                      <img
                        src={e?.picture}
                        className="table-img"
                        alt="table-img"
                      />
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{e?.title}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{e?.subtitle}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p className="line-clamp2">{e?.description}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{new Date(e?.createdAt).toDateString()}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{new Date(e?.updatedAt).toDateString()}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-colsm">
                      {e?.status === true ? (
                        <>
                          <button
                            className="border-0 cursor-pointer font-400 textsuccess rounded-20 fsize12 px12 py4 bg-light-success"
                            onClick={() => handlePublish(e?._id, !e?.status)}
                          >
                            Publish
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="border-0 cursor-pointer font-400 textdanger rounded-20 fsize12 px12 py4 bg-light-danger"
                            onClick={() => handlePublish(e?._id, !e?.status)}
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
                        onClick={() => handleDelete(e?._id)}
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
      {/* ----------------- Desktop ------------------- */}

      {/* ----------------- Mobile ------------------- */}
      <div className="px16 py18 sm-py1 sm-px1 mtpx20 md-mtpx16 sm-mtpx14 hidden md-hidden sm-block">
        {getdata && getdata.length > 0 ? (
          <>
            {getdata?.map((e) => (
              <div className="bgwhite d-shadow rounded-5 w-full mbpx10 relative">
                <div className="p10">
                  <div className="flex items-center">
                    <div className="w-30">
                      <img
                        src={e?.picture}
                        className="table-img rounded-5 bg-ec"
                        alt="table-img "
                      />
                    </div>
                    <div className="w-70 px10">
                      <h6 className="fsize18 leading textprimary mtpx4 mbpx1 line-clamp1">
                        {e?.title}
                      </h6>
                      <p className="fsize10 textgray mtpx6 leading font-200 line-clamp2">
                        {e?.description}
                      </p>
                    </div>
                  </div>
                  <div className="mtpx10 grid-cols-2 gap-10">
                    <div>
                      <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                        Start Date
                      </h6>
                      <p className="fsize10 textgray">
                        {new Date(e?.createdAt).toDateString()}
                      </p>
                    </div>
                    <div>
                      <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                        End Date
                      </h6>
                      <p className="fsize10 textgray">
                        {new Date(e?.updatedAt).toDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="mtpx10">
                    <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                      Section ID
                    </h6>
                    <p className="fsize10 textgray">{e?.sectionid}</p>
                  </div>
                  <div className="mtpx10">
                    <h6 className="textgray leading fsize12 mtpx1 mbpx1">
                      Sub Title
                    </h6>
                    <p className="fsize10 textgray">{e?.subtitle}</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m5 gap-5 flex items-center">
                  <label class="toggle-switch">
                    <input
                      type="checkbox"
                      checked={e?.status}
                      onChange={() => handlePublish(e?._id, !e?.status)}
                    />
                    <span class="tog_slider"></span>
                  </label>
                  <FeatherIcon
                    onClick={() => seteditshow(e)}
                    icon="edit"
                    className="textprimary mx6 cursor-pointer"
                    size={14}
                  />
                  <FeatherIcon
                    onClick={() => handleDelete(e?._id)}
                    icon="trash-2"
                    className="textdanger cursor-pointer"
                    size={14}
                  />
                </div>
              </div>
            ))}
          </>
        ) : (
          <Nodata />
        )}
      </div>
      {/* ----------------- Mobile ------------------- */}

      {paginations ? (
        <>
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
        </>
      ) : null}
    </div>
  );
};

export default Management;
