import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showservice = createAsyncThunk(
  "service/showservice",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/servicegetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationservice = createAsyncThunk(
  "service/paginationservice",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8000/api/servicepaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const addservice = createAsyncThunk(
  "service/addservice",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/serviceadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singleservice = createAsyncThunk(
  "service/singleservice",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/servicesingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateservice = createAsyncThunk(
  "cms/updateservice",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/serviceupdatedata/${id}`,
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

export const statusservice = createAsyncThunk(
  "seo/servicestatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/servicestatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteservice = createAsyncThunk(
  "service/deleteservice",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/servicedeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const serviceSlice = createSlice({
  name: "servicedata",
  initialState: {
    loading: false,
    servicedata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Service Data ------------------ //
    builder.addCase(showservice.pending, (state) => {
      state.loading = true;
      state.servicedata = [];
      state.error = "";
    });
    builder.addCase(showservice.fulfilled, (state, action) => {
      state.loading = false;
      state.servicedata = action.payload;
      state.error = "";
    });
    builder.addCase(showservice.rejected, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Service Data ------------------ //

    // ------------------ Pagination Get Service Data ------------------ //
    builder.addCase(paginationservice.pending, (state) => {
      state.loading = true;
      state.servicedata = [];
      state.error = "";
    });
    builder.addCase(paginationservice.fulfilled, (state, action) => {
      state.loading = false;
      state.servicedata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationservice.rejected, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Service Data ------------------ //

    // ------------------ Add Service Data ------------------ //
    builder.addCase(addservice.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addservice.fulfilled, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addservice.rejected, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Service Data ------------------ //

    // ------------------ Single Service Data ------------------ //
    builder.addCase(singleservice.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singleservice.fulfilled, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singleservice.rejected, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Service Data ------------------ //

    // ------------------ Edit Service Data ------------------ //
    builder.addCase(updateservice.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateservice.fulfilled, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updateservice.rejected, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Service Data ------------------ //

    // ------------------ Edit Status Service Data ------------------ //
    builder.addCase(statusservice.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusservice.fulfilled, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusservice.rejected, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Service Data ------------------ //

    // ------------------ Delete Service Data ------------------ //
    builder.addCase(deleteservice.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteservice.fulfilled, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deleteservice.rejected, (state, action) => {
      state.loading = false;
      state.servicedata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Service Data ------------------ //
  },
});

export default serviceSlice.reducer;
