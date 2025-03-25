import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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
  filteredRestaurants:[],
  selectedRestaurant:{name:"charan"}
}

export const RestaurantSlice = createSlice({
  name: 'current_restaurant',
  initialState,
  reducers: {
    setActiveFood:(state,action) => {
      state.activeFood=action.payload

      if(state.activeFood === 'all'){
        state.filteredRestaurants=state.restaurants
      }else{
        state.filteredRestaurants = state.restaurants.filter( restaurant => 
          restaurant.restaurantType.toLowerCase() === state.activeFood.toLowerCase()
        )
      }
    },
    setRestaurant:(state,action) => {
      state.selectedRestaurant=action.payload
    }
  },
  extraReducers:(builder) => {
    builder
    .addCase(fetchRestaurant.pending, (state) => {
        state.status="loading"
    })
    .addCase(fetchRestaurant.fulfilled,(state,action) => {
      state.status='succeeded'
      state.restaurants=action.payload.restaurants.map((restaurant) => (
        {
          ...restaurant,
          id:crypto.randomUUID()
        }
      ))
      state.filteredRestaurants=state.restaurants
    })
    .addCase(fetchRestaurant.rejected,(state,action) => {
      state.status='failed'
      state.error=action.payload
    })
  }
})

export const filteredRestaurants = (state) => state.current_restaurant.filteredRestaurants;
export const selectedRestaurant = (state) => state.current_restaurant.selectedRestaurant;
export const restaurantsStatus = (state) => state.current_restaurant.status;
export const restaurantsError = (state) => state.current_restaurant.error;


export const {setActiveFood,setRestaurant}=RestaurantSlice.actions;

export default RestaurantSlice.reducer