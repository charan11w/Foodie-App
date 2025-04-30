import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'


// const  ITEM_API='https://run.mocky.io/v3/eb46509d-023a-40be-91d4-621f1ca2f367'
const result=[
  {
    name: "Margherita Pizza",
    type: "Veg",
    category: "Pizza",
    price: 199,
    quantity: 1
  },
  {
    name: "Pepperoni Pizza",
    type: "Non-Veg",
    category: "Pizza",
    price: 299,
    quantity: 1
  },
  {
    name: "Paneer Tikka Pizza",
    type: "Veg",
    category: "Pizza",
    price: 249,
    quantity: 1
  },
  {
    name: "BBQ Chicken Pizza",
    type: "Non-Veg",
    category: "Pizza",
    price: 349,
    quantity: 1
  },
  {
    name: "Veggie Supreme Pizza",
    type: "Veg",
    category: "Pizza",
    price: 269,
    quantity: 1
  },
  {
    name: "Chicken Tikka Pizza",
    type: "Non-Veg",
    category: "Pizza",
    price: 329,
    quantity: 1
  },
  {
    name: "Pav Bhaji",
    type: "Veg",
    category: "StreetFood",
    price: 90,
    quantity: 1
  },
  {
    name: "Vada Pav",
    type: "Veg",
    category: "StreetFood",
    price: 25,
    quantity: 1
  },
  {
    name: "Chicken Kebab",
    type: "Non-Veg",
    category: "StreetFood",
    price: 120,
    quantity: 1
  },
  {
    name: "Samosa",
    type: "Veg",
    category: "StreetFood",
    price: 20,
    quantity: 1
  },
  {
    name: "Egg Roll",
    type: "Non-Veg",
    category: "StreetFood",
    price: 60,
    quantity: 1
  },
  {
    name: "Aloo Tikki",
    type: "Veg",
    category: "StreetFood",
    price: 30,
    quantity: 1
  },
  {
    name: "Grilled Chicken",
    type: "Non-Veg",
    category: "Chicken",
    price: 200,
    quantity: 1
  },
  {
    name: "Butter Chicken",
    type: "Non-Veg",
    category: "Chicken",
    price: 260,
    quantity: 1
  },
  {
    name: "Chicken Curry",
    type: "Non-Veg",
    category: "Chicken",
    price: 220,
    quantity: 1
  },
  {
    name: "Tandoori Chicken",
    type: "Non-Veg",
    category: "Chicken",
    price: 280,
    quantity: 1
  },
  {
    name: "Chilli Chicken",
    type: "Non-Veg",
    category: "Chicken",
    price: 190,
    quantity: 1
  },
  {
    name: "Chicken Biryani",
    type: "Non-Veg",
    category: "Chicken",
    price: 230,
    quantity: 1
  },
  {
    name: "Veg Burger",
    type: "Veg",
    category: "Burgers",
    price: 99,
    quantity: 1
  },
  {
    name: "Chicken Burger",
    type: "Non-Veg",
    category: "Burgers",
    price: 149,
    quantity: 1
  },
  {
    name: "Cheese Burst Burger",
    type: "Veg",
    category: "Burgers",
    price: 129,
    quantity: 1
  },
  {
    name: "Spicy Chicken Burger",
    type: "Non-Veg",
    category: "Burgers",
    price: 159,
    quantity: 1
  },
  {
    name: "Mushroom Burger",
    type: "Veg",
    category: "Burgers",
    price: 119,
    quantity: 1
  },
  {
    name: "Double Patty Burger",
    type: "Non-Veg",
    category: "Burgers",
    price: 179,
    quantity: 1
  },
  {
    name: "Paneer Wrap",
    type: "Veg",
    category: "StreetFood",
    price: 70,
    quantity: 1
  }
].map((item) => ({
          ...item,
          id: crypto.randomUUID()
}));

const initialState = {
  items:result
  ,
  filteredItems:result,
  filters:[],
  status:'loading',
  error:null
}





// export const fetchItems=createAsyncThunk(
//   'items',
//   async(__dirname,{rejectWithValue}) =>{
//     try{
//       const response=await axios.get(ITEM_API)
//       return response.data;
//     }catch(error){
//       return rejectWithValue(error.message)
//     }

//   }
// )

export const ItemSlice = createSlice({
  name: 'login_slice',
  initialState,
  reducers: {
    signIn: (state,actions) => {  
      state.restaurant=actions.payload
      state.userName = 'ram'
    }
  },
  // extraReducers:(builder)=>{
  //   builder
  //   .addCase(fetchItems.pending,(state) => {
  //     state.status='loading'
  //   })
  //   .addCase(fetchItems.fulfilled, (state, action) => {
  //     console.log("✅ API Success! Payload received:", action.payload);
    
  //     state.status = 'succeeded';
    
  //     // Check if payload has foodItems
  //     if (action.payload?.foodItems?.length > 0) {
  //       state.items = action.payload.foodItems.map((item) => ({
  //         ...item,
  //         id: crypto.randomUUID()
  //       }));
  //       state.filteredItems = state.items;
  //     } else {
  //       console.warn("⚠️ No foodItems in API response!");
  //     }
  //   })
  //   .addCase(fetchItems.rejected,(state,action) => {
  //     state.status='failed'
  //     state.error=action.payload
  //   })
  // }
})

export const { signIn } = ItemSlice.actions

export default ItemSlice.reducer