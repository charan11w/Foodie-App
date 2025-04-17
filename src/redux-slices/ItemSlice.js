import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'


const  ITEM_API='https://run.mocky.io/v3/eb46509d-023a-40be-91d4-621f1ca2f367'

const initialState = {
  items:[],
  filteredItems:[],
  filters:[],
  status:'loading',
  error:null
}


export const fetchItems=createAsyncThunk(
  'items',
  async(__dirname,{rejectWithValue}) =>{
    try{
      const response=await axios.get(ITEM_API)
      return response.data;
    }catch(error){
      return rejectWithValue(error.message)
    }

  }
)

export const ItemSlice = createSlice({
  name: 'login_slice',
  initialState,
  reducers: {
    signIn: (state,actions) => {  
      state.restaurant=actions.payload
      state.userName = 'ram'
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(fetchItems.pending,(state) => {
      state.status='loading'
    })
    .addCase(fetchItems.fulfilled, (state, action) => {
      console.log("✅ API Success! Payload received:", action.payload);
    
      state.status = 'succeeded';
    
      // Check if payload has foodItems
      if (action.payload?.foodItems?.length > 0) {
        state.items = action.payload.foodItems.map((item) => ({
          ...item,
          id: crypto.randomUUID()
        }));
        state.filteredItems = state.items;
      } else {
        console.warn("⚠️ No foodItems in API response!");
      }
    })
    .addCase(fetchItems.rejected,(state,action) => {
      state.status='failed'
      state.error=action.payload
    })
  }
})

export const { signIn } = ItemSlice.actions

export default ItemSlice.reducer