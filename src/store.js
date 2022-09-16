import { configureStore, createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";


let cart = createSlice({
  name: "cart",
  initialState: [
    // {
    //   id: `${idSynchro.id}`, //id: 0
    //   title: `${idSynchro.title}`, //title: 샤인머스캣케이크
    //   count: countNum, //count: 1
    //   price: `${idSynchro.price}` //price: 55000
    //   totalPrice: totalPrice //totalPrice: 55000
    //   image: 
    // },
    // {
    //   id: `${idSynchro.id}`, //id: 1
    //   title: `${idSynchro.title}`, //title: 유기농야채고로케
    //   count: countNum, //count: 1
    //   price: `${idSynchro.price}` //price: 2600
    //   totalPrice: totalPrice //totalPrice: 2600
    //   image: 
    // }
  ],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    addCount(state, action) {
      let idSyncIndex = state.findIndex((state) => {
        return state.id === action.payload;
      });
      state[idSyncIndex].count += 1;
      state[idSyncIndex].totalPrice += parseInt(state[idSyncIndex].price);
    },
    subtractCount(state, action) {
      let idSyncIndex = state.findIndex((state) => {
        return state.id === action.payload;
      });
      state[idSyncIndex].count -= 1;
      state[idSyncIndex].totalPrice -= state[idSyncIndex].price;
    },
    deleteItem(state, action) {
      state.splice(0, 1);
    }
  },
});
export let { addItem, addCount, subtractCount, deleteItem } = cart.actions;



export default configureStore({
  reducer:{
    cart : cart.reducer,
  }
})

//addCount든 subtractCount든 idSyncIndex는 어차피 let이 같은데... 바깥에다가 let 으로 선언해두고 쓸 수는 없을까?