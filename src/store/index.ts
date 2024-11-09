import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './modules/player.ts'
import recommendReducer from './modules/recommend.ts'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
