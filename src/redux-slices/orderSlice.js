import { createSlice } from '@reduxjs/toolkit'
import React, { act } from 'react'

const initialState = {
  orders:[]
}

const orderSlice=createSlice({
  name:'orders',
  initialState,
  reducers:{
    addToOrders(state,action){
      state.orders.push(action.payload)
    }
  }
}

)


export const { addToOrders} = orderSlice.actions

export default orderSlice.reducer