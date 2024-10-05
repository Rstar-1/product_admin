import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showfaqdata = createAsyncThunk(
  "faq/showfaqdata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/api/faqgetdata");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addfaqdata = createAsyncThunk(
  "faq/addfaqdata",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/faqadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singlefaqdata = createAsyncThunk(
  "faq/singlefaqdata",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/faqsingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updatefaqdata = createAsyncThunk(
  "faq/updatefaqdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/faqupdatedata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletefaqdata = createAsyncThunk(
  "faq/deletefaqdata",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/faqdeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const faqSlice = createSlice({
  name: "faqdata",
  initialState: {
    loading: false,
    faqdata: [],
    error: "",
    isSuccess: "",
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Faq Data ------------------ //
    builder.addCase(showfaqdata.pending, (state) => {
      state.loading = true;
      state.faqdata = [];
      state.error = "";
    });
    builder.addCase(showfaqdata.fulfilled, (state, action) => {
      state.loading = false;
      state.faqdata = action.payload;
      state.error = "";
    });
    builder.addCase(showfaqdata.rejected, (state, action) => {
      state.loading = false;
      state.faqdata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Faq Data ------------------ //

    // ------------------ Add Faq Data ------------------ //
    builder.addCase(addfaqdata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addfaqdata.fulfilled, (state, action) => {
      state.loading = false;
      state.faqdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addfaqdata.rejected, (state, action) => {
      state.loading = false;
      state.faqdata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Faq Data ------------------ //

    // ------------------ Single Faq Data ------------------ //
    builder.addCase(singlefaqdata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singlefaqdata.fulfilled, (state, action) => {
      state.loading = false;
      state.faqdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singlefaqdata.rejected, (state, action) => {
      state.loading = false;
      state.faqdata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Faq Data ------------------ //

    // ------------------ Edit Faq Data ------------------ //
    builder.addCase(updatefaqdata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updatefaqdata.fulfilled, (state, action) => {
      state.loading = false;
      state.faqdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updatefaqdata.rejected, (state, action) => {
      state.loading = false;
      state.faqdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Faq Data ------------------ //

    // ------------------ Delete Faq Data ------------------ //
    builder.addCase(deletefaqdata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deletefaqdata.fulfilled, (state, action) => {
      state.loading = false;
      state.faqdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deletefaqdata.rejected, (state, action) => {
      state.loading = false;
      state.faqdata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Faq Data ------------------ //
  },
});

export default faqSlice.reducer;
