import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const RES_API='https://run.mocky.io/v3/fa9ba3c2-0baf-4b40-857b-6ecd93d9c0b9'


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

export const initialState={
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

export const filteredRestaurants = (state) => state.restaurants.filteredRestaurants;
export const selectedRestaurant = (state) => state.restaurants.selectedRestaurant;
export const restaurantsStatus = (state) => state.restaurants.status;
export const restaurantsError = (state) => state.restaurants.error;



export const {setActiveFood,setRestaurant}=RestaurantSlice.actions;

export default RestaurantSlice.reducer