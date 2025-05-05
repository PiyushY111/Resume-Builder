import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../slice/UserSlice'



export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
})