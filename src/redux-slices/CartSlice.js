import { createSlice } from '@reduxjs/toolkit'
import React, { act } from 'react'

const initialState = {
  cart:{}
}

export const CartSlice = createSlice({
  name: 'cart_slice',
  initialState,
  reducers: {
    addToCart(state,action) {
      state.cart=payload.action
    },
    removeFromCart(state,action){

    },
    updateCart(state,action){

    }
  }
})

export const { addToCart, removeFromCart,updateCart} = CartSlice.actions

export default CartSlice.reducer