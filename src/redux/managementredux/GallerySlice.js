import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showgallery = createAsyncThunk(
  "gallery/showgallery",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/gallerygetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationgallery = createAsyncThunk(
  "gallery/paginationgallery",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8000/api/gallerypaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const addgallery = createAsyncThunk(
  "gallery/addgallery",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/galleryadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singlegallery = createAsyncThunk(
  "gallery/singlegallery",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/gallerysingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updategallery = createAsyncThunk(
  "cms/updategallery",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/galleryupdatedata/${id}`,
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

export const statusgallery = createAsyncThunk(
  "seo/gallerystatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/gallerystatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletegallery = createAsyncThunk(
  "gallery/deletegallery",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/gallerydeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const gallerySlice = createSlice({
  name: "gallerydata",
  initialState: {
    loading: false,
    gallerydata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Gallery Data ------------------ //
    builder.addCase(showgallery.pending, (state) => {
      state.loading = true;
      state.gallerydata = [];
      state.error = "";
    });
    builder.addCase(showgallery.fulfilled, (state, action) => {
      state.loading = false;
      state.gallerydata = action.payload;
      state.error = "";
    });
    builder.addCase(showgallery.rejected, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Gallery Data ------------------ //

    // ------------------ Pagination Get Gallery Data ------------------ //
    builder.addCase(paginationgallery.pending, (state) => {
      state.loading = true;
      state.gallerydata = [];
      state.error = "";
    });
    builder.addCase(paginationgallery.fulfilled, (state, action) => {
      state.loading = false;
      state.gallerydata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationgallery.rejected, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Gallery Data ------------------ //

    // ------------------ Add Gallery Data ------------------ //
    builder.addCase(addgallery.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addgallery.fulfilled, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addgallery.rejected, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Gallery Data ------------------ //

    // ------------------ Single Gallery Data ------------------ //
    builder.addCase(singlegallery.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singlegallery.fulfilled, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singlegallery.rejected, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Gallery Data ------------------ //

    // ------------------ Edit Gallery Data ------------------ //
    builder.addCase(updategallery.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updategallery.fulfilled, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updategallery.rejected, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Gallery Data ------------------ //

    // ------------------ Edit Status Gallery Data ------------------ //
    builder.addCase(statusgallery.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusgallery.fulfilled, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusgallery.rejected, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Gallery Data ------------------ //

    // ------------------ Delete Gallery Data ------------------ //
    builder.addCase(deletegallery.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deletegallery.fulfilled, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deletegallery.rejected, (state, action) => {
      state.loading = false;
      state.gallerydata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Gallery Data ------------------ //
  },
});

export default gallerySlice.reducer;
