import { createSlice } from '@reduxjs/toolkit'
import React, { act } from 'react'

const initialState = {
  isAuthenticated:false,
  activeNav:0,
  userDetails:{}
}

export const AuthSlice = createSlice({
  name: 'auth_slice',
  initialState,
  reducers: {
    login(state,action) {
      state.isAuthenticated=action.payload.isAuthenticated
      state.userDetails=action.payload.user
    },
    logout(state,action) {
      state.isAuthenticated=action.payload.isAuthenticated
      state.userDetails={}
    },
    setNav(state,action) {
      state.activeNav=action.payload
    }
  }
})

export const { login, logout, setNav } = AuthSlice.actions

export default AuthSlice.reducer