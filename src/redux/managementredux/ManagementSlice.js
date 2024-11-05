import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showmanagement = createAsyncThunk(
  "management/showmanagement",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/managementgetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationteammanagement = createAsyncThunk(
  "management/paginationteammanagement",
  async ({ offset, search }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/managementTeampaginationdata",
        { offset, search }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationservicemanagement = createAsyncThunk(
  "management/paginationservicemanagement",
  async ({ offset, search }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/managementServicepaginationdata",
        { offset, search }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationgallerymanagement = createAsyncThunk(
  "management/paginationgallerymanagement",
  async ({ offset, search }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/managementGallerypaginationdata",
        { offset, search }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationclientmanagement = createAsyncThunk(
  "management/paginationclientmanagement",
  async ({ offset, search }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/managementClientpaginationdata",
        { offset, search }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationfaqmanagement = createAsyncThunk(
  "management/paginationfaqmanagement",
  async ({ offset, search }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/managementFaqpaginationdata",
        { offset, search }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationeventmanagement = createAsyncThunk(
  "management/paginationeventmanagement",
  async ({ offset, search }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/managementEventpaginationdata",
        { offset, search }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addmanagement = createAsyncThunk(
  "management/addmanagement",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/managementadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singlemanagement = createAsyncThunk(
  "management/singlemanagement",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/managementsingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updatemanagement = createAsyncThunk(
  "cms/updatemanagement",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/managementupdatedata/${id}`,
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

export const statusmanagement = createAsyncThunk(
  "seo/managementstatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/managementstatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletemanagement = createAsyncThunk(
  "management/deletemanagement",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/managementdeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const managementSlice = createSlice({
  name: "managementdata",
  initialState: {
    loading: false,
    managementdata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Management Data ------------------ //
    builder.addCase(showmanagement.pending, (state) => {
      state.loading = true;
      state.managementdata = [];
      state.error = "";
    });
    builder.addCase(showmanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = action.payload;
      state.error = "";
    });
    builder.addCase(showmanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Management Data ------------------ //

    // ------------------ Pagination Get Team Management Data ------------------ //
    builder.addCase(paginationteammanagement.pending, (state) => {
      state.loading = true;
      state.managementdata = [];
      state.error = "";
    });
    builder.addCase(paginationteammanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationteammanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Team Management Data ------------------ //

    // ------------------ Pagination Get Service Management Data ------------------ //
    builder.addCase(paginationservicemanagement.pending, (state) => {
      state.loading = true;
      state.managementdata = [];
      state.error = "";
    });
    builder.addCase(paginationservicemanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationservicemanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Service Management Data ------------------ //

    // ------------------ Pagination Get Gallery Management Data ------------------ //
    builder.addCase(paginationgallerymanagement.pending, (state) => {
      state.loading = true;
      state.managementdata = [];
      state.error = "";
    });
    builder.addCase(paginationgallerymanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationgallerymanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Gallery Management Data ------------------ //

    // ------------------ Pagination Get Client Management Data ------------------ //
    builder.addCase(paginationclientmanagement.pending, (state) => {
      state.loading = true;
      state.managementdata = [];
      state.error = "";
    });
    builder.addCase(paginationclientmanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationclientmanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Client Management Data ------------------ //

    // ------------------ Pagination Get Faq Management Data ------------------ //
    builder.addCase(paginationfaqmanagement.pending, (state) => {
      state.loading = true;
      state.managementdata = [];
      state.error = "";
    });
    builder.addCase(paginationfaqmanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationfaqmanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Faq Management Data ------------------ //

    // ------------------ Pagination Get Event Management Data ------------------ //
    builder.addCase(paginationeventmanagement.pending, (state) => {
      state.loading = true;
      state.managementdata = [];
      state.error = "";
    });
    builder.addCase(paginationeventmanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationeventmanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Event Management Data ------------------ //

    // ------------------ Add Management Data ------------------ //
    builder.addCase(addmanagement.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addmanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addmanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Management Data ------------------ //

    // ------------------ Single Management Data ------------------ //
    builder.addCase(singlemanagement.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singlemanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singlemanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Management Data ------------------ //

    // ------------------ Edit Management Data ------------------ //
    builder.addCase(updatemanagement.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updatemanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updatemanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Management Data ------------------ //

    // ------------------ Edit Status Management Data ------------------ //
    builder.addCase(statusmanagement.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusmanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusmanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Management Data ------------------ //

    // ------------------ Delete Management Data ------------------ //
    builder.addCase(deletemanagement.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deletemanagement.fulfilled, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deletemanagement.rejected, (state, action) => {
      state.loading = false;
      state.managementdata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Management Data ------------------ //
  },
});

export default managementSlice.reducer;
