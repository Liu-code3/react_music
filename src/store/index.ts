import counter from '@/store/modules/counter.ts'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    counter
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
