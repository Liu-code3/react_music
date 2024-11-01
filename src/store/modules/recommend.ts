import type { PayloadAction } from '@reduxjs/toolkit'
import { getHotRecommend, getNewAlbum, getTopBanner } from '@/api/recommend.ts'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<any[]>) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }: PayloadAction<any[]>) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }: PayloadAction<any[]>) {
      state.newAlbums = payload
    },
  }
})
export const { changeBannersAction, changeHotRecommendAction, changeNewAlbumsAction } = recommendSlice.actions
export default recommendSlice.reducer

const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  async (_, { dispatch }) => {
    // 1，顶部的banners
    const BannersRes: any = await getTopBanner()
    dispatch(changeBannersAction(BannersRes.banners))

    // 2.热门推荐
    const hotRecRes: any = await getHotRecommend()
    dispatch(changeHotRecommendAction(hotRecRes.result))

    // 3.新碟上架
    const newAlbumRes: any = await getNewAlbum()
    dispatch(changeNewAlbumsAction(newAlbumRes.weekData))
  }
)
export { fetchRecommendDataAction }
