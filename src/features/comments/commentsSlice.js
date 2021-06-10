import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Load comment data by articleId through API
export const loadCommentsForArticleId = createAsyncThunk(
  "comments/loadCommentsForArticleId",
  async (articleId) => {
    const response = await fetch(`api/articles/${articleId}/comments`);
    const json = await response.json();
    return json;
  }
);
// Post a comment with articleId through API
export const postCommentForArticleId = createAsyncThunk(
  "comments/postCommentForArticleId",
  async ({ articleId, comment }) => {
    const requestBody = JSON.stringify({
      comment: comment,
    });
    const response = await fetch(`/api/articles/${articleId}/comments`, {
      method: "POST",
      body: requestBody,
    });
    const json = await response.json();
    return json;
  }
);
// Create Slice with extraReducers
export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    byArticleId: {},
    isLoadingComments: false,
    hasErrorLoadingComments: false,
    isPendingCreateComment: false,
    hasErrorCreateComment: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCommentsForArticleId.pending, (state) => {
        state.isLoadingComments = true;
        state.hasErrorLoadingComments = false;
      })
      .addCase(loadCommentsForArticleId.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.hasErrorLoadingComments = false;
        state.byArticleId = {
          [action.payload.articleId]: action.payload.comments,
        };
      })
      .addCase(loadCommentsForArticleId.rejected, (state) => {
        state.isLoadingComments = false;
        state.hasErrorLoadingComments = true;
      })
      .addCase(postCommentForArticleId.pending, (state) => {
        state.isPendingCreateComment = true;
        state.hasErrorCreateComment = false;
      })
      .addCase(postCommentForArticleId.fulfilled, (state, action) => {
        state.isPendingCreateComment = false;
        state.hasErrorCreateComment = false;
        state.byArticleId[action.payload.articleId].push(action.payload);
      })
      .addCase(postCommentForArticleId.rejected, (state) => {
        state.isPendingCreateComment = false;
        state.hasErrorCreateComment = true;
      })
  },
});

// Create Selectors
export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const isPendingCreateComment = (state) =>
  state.comments.isPendingCreateComment;
// Export Reducer
export default commentsSlice.reducer;
