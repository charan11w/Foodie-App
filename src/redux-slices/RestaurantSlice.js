import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// const RES_API='https://run.mocky.io/v3/fa9ba3c2-0baf-4b40-857b-6ecd93d9c0b9'


// export const fetchRestaurant=createAsyncThunk(
//   'products',
//   async(__dirname,{rejectWithValue}) => {
//     try{
//       const response=await axios.get(RES_API)
//       return response.data
//     }catch(error){
//       return rejectWithValue(error.message)
//     }
//   }
// )

export const initialState={
  restaurants:[
      {
        name: "Green Leaf Pure Veg",
        restaurantType: "Veg",
        deliveryTime: "20-30 mins",
        ratings: 4.2,
        numberOfReviews: 210,
        minimumOrder: 50,
        address: "45, MG Road, Bangalore, India"
      },
      {
        name: "Sattvik Bhojan",
        restaurantType: "Veg",
        deliveryTime: "20-30 mins",
        ratings: 4.3,
        numberOfReviews: 185,
        minimumOrder: 50,
        address: "88, Lake Road, Pune, India"
      },
      {
        name: "Shudh Ann",
        restaurantType: "Veg",
        deliveryTime: "15-25 mins",
        ratings: 4.1,
        numberOfReviews: 150,
        minimumOrder: 50,
        address: "12, Park Street, Jaipur, India"
      },
      {
        name: "Annapurna Bhavan",
        restaurantType: "Veg",
        deliveryTime: "25-35 mins",
        ratings: 4.5,
        numberOfReviews: 230,
        minimumOrder: 50,
        address: "76, Rajpath Road, Ahmedabad, India"
      },
      {
        name: "Herbivore Haven",
        restaurantType: "Veg",
        deliveryTime: "20-30 mins",
        ratings: 4.4,
        numberOfReviews: 175,
        minimumOrder: 50,
        address: "90, Temple Road, Varanasi, India"
      },
      {
        name: "Pure Delight",
        restaurantType: "Veg",
        deliveryTime: "15-25 mins",
        ratings: 4.6,
        numberOfReviews: 280,
        minimumOrder: 50,
        address: "23, Main Bazaar, Chennai, India"
      },
      {
        name: "Plant Power Café",
        restaurantType: "Veg",
        deliveryTime: "20-30 mins",
        ratings: 4.3,
        numberOfReviews: 198,
        minimumOrder: 50,
        address: "5, Eco Avenue, Mumbai, India"
      },
      {
        name: "Satvik Vibes",
        restaurantType: "Veg",
        deliveryTime: "30-40 mins",
        ratings: 4.1,
        numberOfReviews: 170,
        minimumOrder: 50,
        address: "30, Riverside Lane, Kolkata, India"
      },
      {
        name: "Desi Tadka",
        restaurantType: "Veg",
        deliveryTime: "25-35 mins",
        ratings: 4.2,
        numberOfReviews: 220,
        minimumOrder: 50,
        address: "14, Street Food Hub, Lucknow, India"
      },
      {
        name: "Ahimsa Bites",
        restaurantType: "Veg",
        deliveryTime: "15-20 mins",
        ratings: 4.7,
        numberOfReviews: 320,
        minimumOrder: 50,
        address: "60, Peace Colony, Chandigarh, India"
      },
      {
        name: "Vedic Thali",
        restaurantType: "Veg",
        deliveryTime: "20-30 mins",
        ratings: 4.5,
        numberOfReviews: 250,
        minimumOrder: 50,
        address: "33, Sacred Road, Haridwar, India"
      },
      {
        name: "Spicy Biryani House",
        restaurantType: "Non-Veg",
        deliveryTime: "30-40 mins",
        ratings: 4.5,
        numberOfReviews: 320,
        minimumOrder: 50,
        address: "12, Food Street, Hyderabad, India"
      },
      {
        name: "Tandoori Junction",
        restaurantType: "Non-Veg",
        deliveryTime: "25-35 mins",
        ratings: 4.7,
        numberOfReviews: 410,
        minimumOrder: 50,
        address: "33, Sector 10, Delhi, India"
      },
      {
        name: "Coastal Flavors",
        restaurantType: "Non-Veg",
        deliveryTime: "30-40 mins",
        ratings: 4.6,
        numberOfReviews: 290,
        minimumOrder: 50,
        address: "21, Marina Bay, Chennai, India"
      },
      {
        name: "Royal Mughlai",
        restaurantType: "Non-Veg",
        deliveryTime: "35-45 mins",
        ratings: 4.8,
        numberOfReviews: 500,
        minimumOrder: 50,
        address: "90, Heritage Lane, Lucknow, India"
      },
      {
        name: "The Meat Feast",
        restaurantType: "Non-Veg",
        deliveryTime: "20-30 mins",
        ratings: 4.3,
        numberOfReviews: 250,
        minimumOrder: 50,
        address: "10, BBQ Street, Bangalore, India"
      },
      {
        name: "Grill Masters",
        restaurantType: "Non-Veg",
        deliveryTime: "30-40 mins",
        ratings: 4.4,
        numberOfReviews: 260,
        minimumOrder: 50,
        address: "40, Flame Avenue, Mumbai, India"
      },
      {
        name: "Flavors of Kerala",
        restaurantType: "Non-Veg",
        deliveryTime: "25-35 mins",
        ratings: 4.5,
        numberOfReviews: 275,
        minimumOrder: 50,
        address: "55, Backwaters Road, Kochi, India"
      }
  ],
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
  // extraReducers:(builder) => {
  //   builder
  //   .addCase(fetchRestaurant.pending, (state) => {
  //       state.status="loading"
  //   })
  //   .addCase(fetchRestaurant.fulfilled,(state,action) => {
  //     state.status='succeeded'
  //     state.restaurants=action.payload.restaurants.map((restaurant) => (
  //       {
  //         ...restaurant,
  //         id:crypto.randomUUID()
  //       }
  //     ))
  //     state.filteredRestaurants=state.restaurants
  //   })
  //   .addCase(fetchRestaurant.rejected,(state,action) => {
  //     state.status='failed'
  //     state.error=action.payload
  //   })
  // }
})

export const filteredRestaurants = (state) => state.restaurants.filteredRestaurants;
export const selectedRestaurant = (state) => state.restaurants.selectedRestaurant;
export const restaurantsStatus = (state) => state.restaurants.status;
export const restaurantsError = (state) => state.restaurants.error;



export const {setActiveFood,setRestaurant}=RestaurantSlice.actions;

export default RestaurantSlice.reducer