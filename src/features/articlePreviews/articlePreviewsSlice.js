import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Load allPreviews data through API
export const loadAllPreviews = createAsyncThunk(
  "articlePreviews/loadAllPreviews",
  async () => {
    const data = await fetch("api/articles");
    const json = await data.json();
    return json;
  }
);

// Create Slice with extraReducers
export const articlePreviewsSlice = createSlice({
  name: "articlePreviews",
  initialState: {
    articles: [],
    isLoadingArticlePreviews: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPreviews.pending, (state) => {
        state.isLoadingArticlePreviews = true;
        state.hasError = false;
      })
      .addCase(loadAllPreviews.fulfilled, (state, action) => {
        state.isLoadingArticlePreviews = false;
        state.articles = action.payload;
      })
      .addCase(loadAllPreviews.rejected, (state, action) => {
        state.isLoadingArticlePreviews = false;
        state.hasError = true;
        state.articles = [];
      })
  }
});
// Create Selectors
export const selectAllPreviews = (state) => state.articlePreviews.articles;
export const isLoadingArticlePreviews = (state) => state.articlePreviews.isLoadingArticlePreviews;
// Export Reducer
export default articlePreviewsSlice.reducer;