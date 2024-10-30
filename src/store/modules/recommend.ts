import type { PayloadAction } from '@reduxjs/toolkit'
import { getTopBanner } from '@/api/recommend.ts'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IRecommendState {
  banners: any[]
}

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    // 1.顶部的banners
    changeBannersAction(state, { payload }: PayloadAction<any[]>) {
      state.banners = payload
    }
  }
})
export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer

const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  async (_, { dispatch }) => {
    const res: any = await getTopBanner()
    dispatch(changeBannersAction(res.banners))
  }
)
export { fetchRecommendDataAction }
