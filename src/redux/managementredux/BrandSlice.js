import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const showbrand = createAsyncThunk(
  "brand/showbrand",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/brandgetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationbrand = createAsyncThunk(
  "brand/paginationbrand",
  async ({ offset, search, project }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/brandpaginationdata`,
        {
          offset,
          search,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addbrand = createAsyncThunk(
  "brand/addbrand",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/brandadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singlebrand = createAsyncThunk(
  "brand/singlebrand",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/brandsingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updatebrand = createAsyncThunk(
  "cms/updatebrand",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/brandupdatedata/${id}`,
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

export const statusbrand = createAsyncThunk(
  "seo/brandstatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/brandstatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletebrand = createAsyncThunk(
  "brand/deletebrand",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/branddeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const brandSlice = createSlice({
  name: "branddata",
  initialState: {
    loading: false,
    branddata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Brand Data ------------------ //
    builder.addCase(showbrand.pending, (state) => {
      state.loading = true;
      state.branddata = [];
      state.error = "";
    });
    builder.addCase(showbrand.fulfilled, (state, action) => {
      state.loading = false;
      state.branddata = action.payload;
      state.error = "";
    });
    builder.addCase(showbrand.rejected, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Brand Data ------------------ //

    // ------------------ Pagination Get Brand Data ------------------ //
    builder.addCase(paginationbrand.pending, (state) => {
      state.loading = true;
      state.branddata = [];
      state.error = "";
    });
    builder.addCase(paginationbrand.fulfilled, (state, action) => {
      state.loading = false;
      state.branddata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationbrand.rejected, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Brand Data ------------------ //

    // ------------------ Add Brand Data ------------------ //
    builder.addCase(addbrand.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addbrand.fulfilled, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addbrand.rejected, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Brand Data ------------------ //

    // ------------------ Single Brand Data ------------------ //
    builder.addCase(singlebrand.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singlebrand.fulfilled, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singlebrand.rejected, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Brand Data ------------------ //

    // ------------------ Edit Brand Data ------------------ //
    builder.addCase(updatebrand.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updatebrand.fulfilled, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updatebrand.rejected, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Brand Data ------------------ //

    // ------------------ Edit Status Brand Data ------------------ //
    builder.addCase(statusbrand.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusbrand.fulfilled, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusbrand.rejected, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Brand Data ------------------ //

    // ------------------ Delete Brand Data ------------------ //
    builder.addCase(deletebrand.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deletebrand.fulfilled, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deletebrand.rejected, (state, action) => {
      state.loading = false;
      state.branddata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Brand Data ------------------ //
  },
});

export default brandSlice.reducer;
