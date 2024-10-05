import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showclient = createAsyncThunk(
  "client/showclient",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/clientgetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationclient = createAsyncThunk(
  "client/paginationclient",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8000/api/clientpaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const addclient = createAsyncThunk(
  "client/addclient",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/clientadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singleclient = createAsyncThunk(
  "client/singleclient",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/clientsingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateclient = createAsyncThunk(
  "cms/updateclient",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/clientupdatedata/${id}`,
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

export const statusclient = createAsyncThunk(
  "seo/clientstatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/clientstatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteclient = createAsyncThunk(
  "client/deleteclient",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/clientdeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const clientSlice = createSlice({
  name: "clientdata",
  initialState: {
    loading: false,
    clientdata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Client Data ------------------ //
    builder.addCase(showclient.pending, (state) => {
      state.loading = true;
      state.clientdata = [];
      state.error = "";
    });
    builder.addCase(showclient.fulfilled, (state, action) => {
      state.loading = false;
      state.clientdata = action.payload;
      state.error = "";
    });
    builder.addCase(showclient.rejected, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Client Data ------------------ //

    // ------------------ Pagination Get Client Data ------------------ //
    builder.addCase(paginationclient.pending, (state) => {
      state.loading = true;
      state.clientdata = [];
      state.error = "";
    });
    builder.addCase(paginationclient.fulfilled, (state, action) => {
      state.loading = false;
      state.clientdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationclient.rejected, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Client Data ------------------ //

    // ------------------ Add Client Data ------------------ //
    builder.addCase(addclient.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addclient.fulfilled, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addclient.rejected, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Client Data ------------------ //

    // ------------------ Single Client Data ------------------ //
    builder.addCase(singleclient.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singleclient.fulfilled, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singleclient.rejected, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Client Data ------------------ //

    // ------------------ Edit Client Data ------------------ //
    builder.addCase(updateclient.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateclient.fulfilled, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updateclient.rejected, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Client Data ------------------ //

    // ------------------ Edit Status Client Data ------------------ //
    builder.addCase(statusclient.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusclient.fulfilled, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusclient.rejected, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Client Data ------------------ //

    // ------------------ Delete Client Data ------------------ //
    builder.addCase(deleteclient.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteclient.fulfilled, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deleteclient.rejected, (state, action) => {
      state.loading = false;
      state.clientdata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Client Data ------------------ //
  },
});

export default clientSlice.reducer;
