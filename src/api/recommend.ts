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

export {
  getHotRecommend,
  getNewAlbum,
  getTopBanner
}
