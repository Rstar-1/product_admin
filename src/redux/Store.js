import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorredux/ColorSlice";
import SeoSlice from "./seoredux/SeoSlice";
import TextSlice from "./cmsredux/TextSlice";
import ImageSlice from "./cmsredux/ImageSlice";
import ReviewSlice from "./managementredux/ReviewSlice";
import ManagementSlice from "./managementredux/ManagementSlice";
import ApiSlice from "./apiredux/ApiSlice";

export const store = configureStore({
  reducer: {
    theme: colorReducer,
    seodata: SeoSlice,
    cmstextdata: TextSlice,
    cmsimagedata: ImageSlice,
    reviewdata: ReviewSlice,
    managementdata: ManagementSlice,
    apidata: ApiSlice,
  },
});

export default store;
