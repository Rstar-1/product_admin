import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showevent = createAsyncThunk(
  "event/showevent",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/eventgetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationevent = createAsyncThunk(
  "event/paginationevent",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8000/api/eventpaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const addevent = createAsyncThunk(
  "event/addevent",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/eventadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singleevent = createAsyncThunk(
  "event/singleevent",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/eventsingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateevent = createAsyncThunk(
  "cms/updateevent",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/eventupdatedata/${id}`,
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

export const statusevent = createAsyncThunk(
  "seo/eventstatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/eventstatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteevent = createAsyncThunk(
  "event/deleteevent",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/eventdeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const eventSlice = createSlice({
  name: "eventdata",
  initialState: {
    loading: false,
    eventdata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Events Data ------------------ //
    builder.addCase(showevent.pending, (state) => {
      state.loading = true;
      state.eventdata = [];
      state.error = "";
    });
    builder.addCase(showevent.fulfilled, (state, action) => {
      state.loading = false;
      state.eventdata = action.payload;
      state.error = "";
    });
    builder.addCase(showevent.rejected, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Events Data ------------------ //

    // ------------------ Pagination Get Events Data ------------------ //
    builder.addCase(paginationevent.pending, (state) => {
      state.loading = true;
      state.eventdata = [];
      state.error = "";
    });
    builder.addCase(paginationevent.fulfilled, (state, action) => {
      state.loading = false;
      state.eventdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationevent.rejected, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Events Data ------------------ //

    // ------------------ Add Events Data ------------------ //
    builder.addCase(addevent.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addevent.fulfilled, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addevent.rejected, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Events Data ------------------ //

    // ------------------ Single Events Data ------------------ //
    builder.addCase(singleevent.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singleevent.fulfilled, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singleevent.rejected, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Events Data ------------------ //

    // ------------------ Edit Events Data ------------------ //
    builder.addCase(updateevent.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateevent.fulfilled, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updateevent.rejected, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Events Data ------------------ //

    // ------------------ Edit Status Events Data ------------------ //
    builder.addCase(statusevent.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusevent.fulfilled, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusevent.rejected, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Events Data ------------------ //

    // ------------------ Delete Events Data ------------------ //
    builder.addCase(deleteevent.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteevent.fulfilled, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deleteevent.rejected, (state, action) => {
      state.loading = false;
      state.eventdata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Events Data ------------------ //
  },
});

export default eventSlice.reducer;
