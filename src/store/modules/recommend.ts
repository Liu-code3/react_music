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

// 因为以下异步请求没有传递蚕素 所以只使用了一个中间件来发送
// 应该避免过多的异步请求
// 建议不要使用async函数 使用await来同步代码 这样中间件就会串行运行
const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    // 1，顶部的banners
    getTopBanner().then((res: any) => {
      dispatch(changeBannersAction(res.banners))
    })

    // 2.热门推荐
    getHotRecommend().then((res: any) => {
      dispatch(changeHotRecommendAction(res.result))
    })

    // 3.新碟上架
    getNewAlbum().then((res: any) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })
  }
)
export { fetchRecommendDataAction }
