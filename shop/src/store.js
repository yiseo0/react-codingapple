import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

let cart = createSlice({
  name: 'cart',
  initialState:
    [
      { id: 0, name: 'White and Black', count: 2 },
      { id: 2, name: 'Grey Yordan', count: 1 }
    ],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex(el => el.id === action.payload)
      state[num].count++
    },
    addItem(state, action) {
      let num = state.findIndex(el => el.id == action.payload.id)
      if (num > 0) {
        state[num].count++
      } else {
        state.push(action.payload)
      }
    },
    delItem(state, action) {
      return state.filter(el => el.id !== action.payload)
    }
  }
})
export let { addCount, addItem, delItem } = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer
  }
}) 