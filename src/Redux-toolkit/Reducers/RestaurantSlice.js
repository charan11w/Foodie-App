import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'


const RES_API='https://238254d4-e40a-4d70-baf6-3690771894a0.mock.pstmn.io'


export const fetchRestaurant=createAsyncThunk(
  'products',
  async(__dirname,{rejectWithValue}) => {
    try{
      const response=await axios.get(RES_API)
      return response.data
    }catch(error){
      return rejectWithValue(error.message)
    }
  }
)

const initialState={
  restaurants:[],
  status:'loading',
  error:null,
  activeFood:'all',
  filteredRestaurants:[]
}

export const RestaurantSlice = createSlice({
  name: 'current_restaurant',
  initialState,
  reducers: {
    setActiveFood:(state,action) => {
      state.activeFood=action.payload
    }
  },
  extraReducers:(builder) => {
    builder
    .addCase(fetchRestaurant.pending, (state) => {
        state.status="loading"
    })
    .addCase(fetchRestaurant.fulfilled,(state,action) => {
      state.status='succeeded'
      state.restaurants=action.payload
    })
    .addCase(fetchRestaurant.rejected,(state,action) => {
      state.status='failed'
      state.error=action.payload
    })
  }
})

export const selectAllRestaurants= state => state.restaurants;
export const restaurantsStatus=state => state.status
export const restaurantsError=state => state.error

export const {setActiveFood}=RestaurantSlice.actions;

export default RestaurantSlice.reducer