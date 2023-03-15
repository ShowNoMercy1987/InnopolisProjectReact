import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    products: [],
  },

  reducers: {
    addProduct: (prevState, action) => {
      const product = action.payload;
      const hadInCart = prevState.products.includes(
        (prevProduct) => prevProduct.id === product.id
      );

      if (hadInCart) return prevState;
      return {
        ...prevState,
        products: [...prevState.products, action.payload],
      };
    },

    removeProduct: (prevState, action) => {
      const product = action.payload;

      return {
        ...prevState,
        products: prevState.products.filter((prev) => {
          return prev.id !== product.id;
        }),
      };
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
