import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showcmstextdata = createAsyncThunk(
  "cmstext/showcmstextdata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/cmstextgetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationcmstextdata = createAsyncThunk(
  "cmstext/paginationcmstextdata",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8000/api/Cmstextpaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const addcmstextdata = createAsyncThunk(
  "cmstext/addcmstextdata",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/cmstextadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singlecmstextdata = createAsyncThunk(
  "cmstext/singlecmstextdata",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/cmstextsingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updatecmstextdata = createAsyncThunk(
  "cmstext/updatecmstextdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/cmstextupdatedata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletecmstextdata = createAsyncThunk(
  "cmstext/deletecmstextdata",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/cmstextdeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const textSlice = createSlice({
  name: "cmstextdata",
  initialState: {
    loading: false,
    cmstextdata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Cmstext Data ------------------ //
    builder.addCase(showcmstextdata.pending, (state) => {
      state.loading = true;
      state.cmstextdata = [];
      state.error = "";
    });
    builder.addCase(showcmstextdata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmstextdata = action.payload;
      state.error = "";
    });
    builder.addCase(showcmstextdata.rejected, (state, action) => {
      state.loading = false;
      state.cmstextdata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Cmstext Data ------------------ //

    // ------------------ Pagination Get Cmstext Data ------------------ //
    builder.addCase(paginationcmstextdata.pending, (state) => {
      state.loading = true;
      state.cmstextdata = [];
      state.error = "";
    });
    builder.addCase(paginationcmstextdata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmstextdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationcmstextdata.rejected, (state, action) => {
      state.loading = false;
      state.cmstextdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Cmstext Data ------------------ //

    // ------------------ Add Cmstext Data ------------------ //
    builder.addCase(addcmstextdata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addcmstextdata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmstextdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addcmstextdata.rejected, (state, action) => {
      state.loading = false;
      state.cmstextdata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Cmstext Data ------------------ //

    // ------------------ Single Cmstext Data ------------------ //
    builder.addCase(singlecmstextdata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singlecmstextdata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmstextdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singlecmstextdata.rejected, (state, action) => {
      state.loading = false;
      state.cmstextdata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Cmstext Data ------------------ //

    // ------------------ Edit Cmstext Data ------------------ //
    builder.addCase(updatecmstextdata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updatecmstextdata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmstextdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updatecmstextdata.rejected, (state, action) => {
      state.loading = false;
      state.cmstextdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Cmstext Data ------------------ //

    // ------------------ Delete Cmstext Data ------------------ //
    builder.addCase(deletecmstextdata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deletecmstextdata.fulfilled, (state, action) => {
      state.loading = false;
      state.cmstextdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deletecmstextdata.rejected, (state, action) => {
      state.loading = false;
      state.cmstextdata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Cmstext Data ------------------ //
  },
});

export default textSlice.reducer;
