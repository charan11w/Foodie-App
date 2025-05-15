import { createSlice } from '@reduxjs/toolkit'
import React, { act } from 'react'

const initialState = {
  cart:[],
  selectedItem:{}
}

export const CartSlice = createSlice({
  name: 'cart_slice',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cart.push({ ...item, quantity: item.quantity });
      }
    },
    // Optional: Remove item or reduce quantity
    removeFromCart(state, action) {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    decrementQty(state, action) {
      const itemId = action.payload;
      const existingItem = state.cart.find((i) => i.id === itemId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== itemId);
      }
    },
    incrementQty(state,action){
      const itemId=action.payload
      const existingItem=state.cart.find((i) => i.id === itemId)
      if(existingItem && existingItem.quantity <10){
        existingItem.quantity+=1;
      }
    },
    selectItem(state,action){
      state.selectedItem=action.payload
    },
    emptyCart(state){
      state.cart=[]
    }
  }
});

export const { addToCart, removeFromCart,updateCart,selectItem,decrementQty,incrementQty,emptyCart} = CartSlice.actions

export default CartSlice.reducer