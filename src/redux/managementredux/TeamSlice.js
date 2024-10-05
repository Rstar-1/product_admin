import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showteam = createAsyncThunk(
  "team/showteam",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/teamgetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationteam = createAsyncThunk(
  "team/paginationteam",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8000/api/teampaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const addteam = createAsyncThunk(
  "team/addteam",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/teamadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singleteam = createAsyncThunk(
  "team/singleteam",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/teamsingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateteam = createAsyncThunk(
  "cms/updateteam",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/teamupdatedata/${id}`,
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

export const statusteam = createAsyncThunk(
  "seo/teamstatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/teamstatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteteam = createAsyncThunk(
  "team/deleteteam",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/teamdeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const teamSlice = createSlice({
  name: "teamdata",
  initialState: {
    loading: false,
    teamdata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Team Data ------------------ //
    builder.addCase(showteam.pending, (state) => {
      state.loading = true;
      state.teamdata = [];
      state.error = "";
    });
    builder.addCase(showteam.fulfilled, (state, action) => {
      state.loading = false;
      state.teamdata = action.payload;
      state.error = "";
    });
    builder.addCase(showteam.rejected, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Team Data ------------------ //

    // ------------------ Pagination Get Team Data ------------------ //
    builder.addCase(paginationteam.pending, (state) => {
      state.loading = true;
      state.teamdata = [];
      state.error = "";
    });
    builder.addCase(paginationteam.fulfilled, (state, action) => {
      state.loading = false;
      state.teamdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationteam.rejected, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Team Data ------------------ //

    // ------------------ Add Team Data ------------------ //
    builder.addCase(addteam.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addteam.fulfilled, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addteam.rejected, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Team Data ------------------ //

    // ------------------ Single Team Data ------------------ //
    builder.addCase(singleteam.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singleteam.fulfilled, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singleteam.rejected, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Team Data ------------------ //

    // ------------------ Edit Team Data ------------------ //
    builder.addCase(updateteam.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateteam.fulfilled, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updateteam.rejected, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Team Data ------------------ //

    // ------------------ Edit Status Team Data ------------------ //
    builder.addCase(statusteam.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusteam.fulfilled, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusteam.rejected, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Team Data ------------------ //

    // ------------------ Delete Team Data ------------------ //
    builder.addCase(deleteteam.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteteam.fulfilled, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deleteteam.rejected, (state, action) => {
      state.loading = false;
      state.teamdata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Team Data ------------------ //
  },
});

export default teamSlice.reducer;
