import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: "like",

  initialState: {
    likes: [],
  },

  reducers: {
    addLike: (prevState, action) => {
      const like = action.payload;
      const hadInCart = prevState.likes.includes(
        (prevLike) => prevLike.id === like.id
      );

      if (hadInCart) return prevState;
      return {
        ...prevState,
        likes: [...prevState.likes, action.payload],
      };
    },

    removeLike: (prevState, action) => {
      const like = action.payload;

      return {
        ...prevState,
        likes: prevState.likes.filter((prev) => {
          return prev.id !== like.id;
        }),
      };
    },
  },
});

export const { addLike, removeLike } = likeSlice.actions;
export default likeSlice.reducer;
