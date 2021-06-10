import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Load currentArticle data by articleId through API
export const loadCurrentArticle = createAsyncThunk(
  "currentArticle/loadCurrentArticle",
  async (articleId) => {
    const data = await fetch(`api/articles/${articleId}`);
    const json = await data.json();
    return json;
  }
);
// Create Slice with extraReducers
export const currentArticleSlice = createSlice({
  name: "currentArticle",
  initialState: {
    article: undefined,
    isLoadingCurrentArticle: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCurrentArticle.pending, (state) => {
        state.isLoadingCurrentArticle = true;
        state.hasError = false;
      })
      .addCase(loadCurrentArticle.fulfilled, (state, action) => {
        state.isLoadingCurrentArticle = false;
        state.hasError = false;
        state.article = action.payload;
      })
      .addCase(loadCurrentArticle.rejected, (state) => {
        state.isLoadingCurrentArticle = false;
        state.hasError = true;
        state.article = {};
      });
  },
});
// Create Selectors
export const selectCurrentArticle = (state) =>
  state.currentArticle.article;
export const isLoadingCurrentArticle = (state) =>
  state.currentArticle.isLoadingCurrentArticle;
// Export Reducer
export default currentArticleSlice.reducer;
