import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
  currentRestaurant:{}
}

export const RestaurantSlice = createSlice({
  name: 'current_restaurant',
  initialState,
  reducers: {
    selected: (state,actions) => {  
      state.restaurant=actions.payload
    }
  }
})

export const { signIn } = RestaurantSlice.actions

export default RestaurantSlice.reducer