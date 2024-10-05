import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showseodata = createAsyncThunk(
  "seo/showseodata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/api/seogetdata");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addseodata = createAsyncThunk(
  "seo/addseodata",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/seoadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singleseodata = createAsyncThunk(
  "seo/singleseodata",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/seosingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateseodata = createAsyncThunk(
  "seo/updateseodata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/seoupdatedata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteseodata = createAsyncThunk(
  "seo/deleteseodata",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/seodeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const seoSlice = createSlice({
  name: "seodata",
  initialState: {
    loading: false,
    seodata: [],
    error: "",
    isSuccess: "",
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Seo Data ------------------ //
    builder.addCase(showseodata.pending, (state) => {
      state.loading = true;
      state.seodata = [];
      state.error = "";
    });
    builder.addCase(showseodata.fulfilled, (state, action) => {
      state.loading = false;
      state.seodata = action.payload;
      state.error = "";
    });
    builder.addCase(showseodata.rejected, (state, action) => {
      state.loading = false;
      state.seodata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Seo Data ------------------ //

    // ------------------ Add Seo Data ------------------ //
    builder.addCase(addseodata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addseodata.fulfilled, (state, action) => {
      state.loading = false;
      state.seodata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addseodata.rejected, (state, action) => {
      state.loading = false;
      state.seodata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Seo Data ------------------ //

    // ------------------ Single Seo Data ------------------ //
    builder.addCase(singleseodata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singleseodata.fulfilled, (state, action) => {
      state.loading = false;
      state.seodata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singleseodata.rejected, (state, action) => {
      state.loading = false;
      state.seodata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Seo Data ------------------ //

    // ------------------ Edit Seo Data ------------------ //
    builder.addCase(updateseodata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateseodata.fulfilled, (state, action) => {
      state.loading = false;
      state.seodata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updateseodata.rejected, (state, action) => {
      state.loading = false;
      state.seodata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Seo Data ------------------ //
    
    // ------------------ Delete Seo Data ------------------ //
    builder.addCase(deleteseodata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteseodata.fulfilled, (state, action) => {
      state.loading = false;
      state.seodata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deleteseodata.rejected, (state, action) => {
      state.loading = false;
      state.seodata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Seo Data ------------------ //
  },
});

export default seoSlice.reducer;
