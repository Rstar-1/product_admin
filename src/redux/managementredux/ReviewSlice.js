import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showreview = createAsyncThunk(
  "review/showreview",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/reviewgetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationreview = createAsyncThunk(
  "review/paginationreview",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8000/api/reviewpaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const addreview = createAsyncThunk(
  "review/addreview",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/reviewadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singlereview = createAsyncThunk(
  "review/singlereview",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/reviewsingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updatereview = createAsyncThunk(
  "cms/updatereview",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/reviewupdatedata/${id}`,
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

export const statusreview = createAsyncThunk(
  "seo/reviewstatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/reviewstatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletereview = createAsyncThunk(
  "review/deletereview",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/reviewdeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const reviewSlice = createSlice({
  name: "reviewdata",
  initialState: {
    loading: false,
    reviewdata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Review Data ------------------ //
    builder.addCase(showreview.pending, (state) => {
      state.loading = true;
      state.reviewdata = [];
      state.error = "";
    });
    builder.addCase(showreview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviewdata = action.payload;
      state.error = "";
    });
    builder.addCase(showreview.rejected, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Review Data ------------------ //

    // ------------------ Pagination Get Review Data ------------------ //
    builder.addCase(paginationreview.pending, (state) => {
      state.loading = true;
      state.reviewdata = [];
      state.error = "";
    });
    builder.addCase(paginationreview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviewdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationreview.rejected, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Review Data ------------------ //

    // ------------------ Add Review Data ------------------ //
    builder.addCase(addreview.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addreview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addreview.rejected, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Review Data ------------------ //

    // ------------------ Single Review Data ------------------ //
    builder.addCase(singlereview.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singlereview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singlereview.rejected, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Review Data ------------------ //

    // ------------------ Edit Review Data ------------------ //
    builder.addCase(updatereview.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updatereview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updatereview.rejected, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Review Data ------------------ //

    // ------------------ Edit Status Review Data ------------------ //
    builder.addCase(statusreview.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusreview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusreview.rejected, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Review Data ------------------ //

    // ------------------ Delete Review Data ------------------ //
    builder.addCase(deletereview.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deletereview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deletereview.rejected, (state, action) => {
      state.loading = false;
      state.reviewdata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Review Data ------------------ //
  },
});

export default reviewSlice.reducer;
