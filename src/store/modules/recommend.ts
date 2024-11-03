import type { PayloadAction } from '@reduxjs/toolkit'
import { getHotRecommend, getNewAlbum, getPlayListDetail, getTopBanner } from '@/api/recommend.ts'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: []
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
    changeRankinsAction(state, { payload }: PayloadAction<any[]>) {
      state.rankings = payload
    }
  }
})
export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumsAction,
  changeRankinsAction
} = recommendSlice.actions
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

const rankingMap = {
  upRanking: 19723756,
  newRanking: 3779629,
  originRanking: 2884035
}
const fetchRankingDataAction = createAsyncThunk(
  'ranking',
  (_, { dispatch }) => {
    // 所有榜单数据
    const promises: Promise<any>[] = []
    let key: keyof typeof rankingMap
    for (key in rankingMap) {
      const id = rankingMap[key]
      promises.push(getPlayListDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playlist = res.map(item => item.playlist)
      dispatch(changeRankinsAction(playlist))
    })
  }
)
export { fetchRankingDataAction, fetchRecommendDataAction }
