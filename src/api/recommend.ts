import { requset } from '@/utils/http'

function getTopBanner() {
  return requset.get('/banner')
}

function getHotRecommend() {
  return requset.get('/personalized')
}

function getNewAlbum(offset = 0, limit = 10) {
  return requset.get('/top/album', { params: { offset, limit } })
}

export {
  getHotRecommend,
  getNewAlbum,
  getTopBanner
}
