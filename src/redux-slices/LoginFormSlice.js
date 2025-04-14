import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
  userName: 'charan',
  passWord: 'teliyadu',
  restaurant:{}
}

export const LoginFormSlice = createSlice({
  name: 'login_slice',
  initialState,
  reducers: {
    signIn: (state,actions) => {  
      state.restaurant=actions.payload
      state.userName = 'ram'
    }
  }
})

export const { signIn } = LoginFormSlice.actions

export default LoginFormSlice.reducer