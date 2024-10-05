import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showcmsimagedata = createAsyncThunk(
  "cmsimage/showcmsimagedata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/cmsimagegetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationcmsimagedata = createAsyncThunk(
  "cmsimage/paginationcmsimagedata",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8000/api/Cmsimagepaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const addcmsimagedata = createAsyncThunk(
  "cmsimage/addcmsimagedata",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/cmsimageadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singlecmsimagedata = createAsyncThunk(
  "cmsimage/singlecmsimagedata",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/cmsimagesingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updatecmsimagedata = createAsyncThunk(
  "cms/updatecmsimagedata",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/cmsimageupdatedata/${id}`,
        formData
      );
      return response.data;
    } catch (error) {
      console.error(
        "Update CMS Image Data Error:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const statuscmsimagedata = createAsyncThunk(
  "seo/cmsimagestatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/cmsimagestatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletecmsimagedata = createAsyncThunk(
  "cmsimage/deletecmsimagedata",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/cmsimagedeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const imageSlice = createSlice({
  name: "cmsimagedata",
  initialState: {
    loading: false,
    cmsimagedata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Cmsimage Data ------------------ //
    builder.addCase(showcmsimagedata.pending, (state) => {
      state.loading = true;
      state.cmsimagedata = [];
      state.error = "";
    });
    builder.addCase(showcmsimagedata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmsimagedata = action.payload;
      state.error = "";
    });
    builder.addCase(showcmsimagedata.rejected, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Cmsimage Data ------------------ //

    // ------------------ Pagination Get Cmsimage Data ------------------ //
    builder.addCase(paginationcmsimagedata.pending, (state) => {
      state.loading = true;
      state.cmsimagedata = [];
      state.error = "";
    });
    builder.addCase(paginationcmsimagedata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmsimagedata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationcmsimagedata.rejected, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Cmsimage Data ------------------ //

    // ------------------ Add Cmsimage Data ------------------ //
    builder.addCase(addcmsimagedata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addcmsimagedata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addcmsimagedata.rejected, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Cmsimage Data ------------------ //

    // ------------------ Single Cmsimage Data ------------------ //
    builder.addCase(singlecmsimagedata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singlecmsimagedata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singlecmsimagedata.rejected, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Cmsimage Data ------------------ //

    // ------------------ Edit Cmsimage Data ------------------ //
    builder.addCase(updatecmsimagedata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updatecmsimagedata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updatecmsimagedata.rejected, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Cmsimage Data ------------------ //

    // ------------------ Edit Status Cmsimage Data ------------------ //
    builder.addCase(statuscmsimagedata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statuscmsimagedata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statuscmsimagedata.rejected, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Cmsimage Data ------------------ //

    // ------------------ Delete Cmsimage Data ------------------ //
    builder.addCase(deletecmsimagedata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deletecmsimagedata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deletecmsimagedata.rejected, (state, action) => {
      state.loading = false;
      state.cmsimagedata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Cmsimage Data ------------------ //
  },
});

export default imageSlice.reducer;
