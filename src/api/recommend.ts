import { requset } from '@/utils/http'

function getTopBanner() {
  return requset.get('/banner')
}

function getHotRecommend() {
  return requset.get('/personalized')
}

function getNewAlbum() {
  return requset.get('/album/newest')
}

function getPlayListDetail(id: number) {
  return requset.get('/playlist/detail', { params: { id } })
}

export {
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
  getTopBanner
}
