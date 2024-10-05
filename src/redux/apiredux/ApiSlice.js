import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showapidata = createAsyncThunk(
  "api/showapidata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8001/api/apigetdata");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationapi = createAsyncThunk(
  "api/paginationapi",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8001/api/apipaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const addapidata = createAsyncThunk(
  "api/addapidata",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8001/api/apiadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singleapidata = createAsyncThunk("api/singleapidata", async (payload) => {
  try {
    const response = await axios.patch(
      `http://localhost:8001/api/apisingledata/${payload}`,
      payload
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
});

export const updateapidata = createAsyncThunk(
  "api/updateapidata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8001/api/apiupdatedata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const statusapi = createAsyncThunk(
  "seo/apistatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8001/api/apistatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteapidata = createAsyncThunk(
  "api/deleteapidata",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8001/api/apideletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const apiSlice = createSlice({
  name: "apidata",
  initialState: {
    loading: false,
    apidata: [],
    error: "",
    isSuccess: "",
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Api Data ------------------ //
    builder.addCase(showapidata.pending, (state) => {
      state.loading = true;
      state.apidata = [];
      state.error = "";
    });
    builder.addCase(showapidata.fulfilled, (state, action) => {
      state.loading = false;
      state.apidata = action.payload;
      state.error = "";
    });
    builder.addCase(showapidata.rejected, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Api Data ------------------ //

    // ------------------ Pagination Get Api Data ------------------ //
    builder.addCase(paginationapi.pending, (state) => {
      state.loading = true;
      state.apidata = [];
      state.error = "";
    });
    builder.addCase(paginationapi.fulfilled, (state, action) => {
      state.loading = false;
      state.apidata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationapi.rejected, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Api Data ------------------ //

    // ------------------ Add Api Data ------------------ //
    builder.addCase(addapidata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addapidata.fulfilled, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addapidata.rejected, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Api Data ------------------ //

    // ------------------ Single Api Data ------------------ //
    builder.addCase(singleapidata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singleapidata.fulfilled, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singleapidata.rejected, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Api Data ------------------ //

    // ------------------ Edit Api Data ------------------ //
    builder.addCase(updateapidata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateapidata.fulfilled, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updateapidata.rejected, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Api Data ------------------ //

    // ------------------ Edit Status Api Data ------------------ //
    builder.addCase(statusapi.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusapi.fulfilled, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusapi.rejected, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Api Data ------------------ //

    // ------------------ Delete Api Data ------------------ //
    builder.addCase(deleteapidata.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteapidata.fulfilled, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deleteapidata.rejected, (state, action) => {
      state.loading = false;
      state.apidata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Api Data ------------------ //
  },
});

export default apiSlice.reducer;
