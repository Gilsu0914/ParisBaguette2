import { configureStore, createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

let cart = createSlice({
  name : 'cart',  
  initialState : [
    {
      id : 0, 
      title : '샤인머스캣케이크', 
      count : 1,
      price : '55,000원',
    },
    {
      id : 2, 
      title : '꽈배기도넛', 
      count : 3,
      price : '2,500원',
    },
    {
      id : 1, 
      title : '유기농야채고로케', 
      count : 1,
      price : '2,600원',
    }
  ],
  reducer:{

  }
})


export default configureStore({
  reducer:{
    cart : cart.reducer,
  }
})