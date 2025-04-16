import { createSlice } from '@reduxjs/toolkit'
import React, { act } from 'react'

const initialState = {
  isAuthenticated: false,
  userDetails: {}
}

export const AuthSlice = createSlice({
  name: 'auth_slice',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated
      state.userDetails = action.payload.user
    },
    logout(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated
      state.userDetails = {}
    }
  }
})

export const { login, logout} = AuthSlice.actions

export default AuthSlice.reducer