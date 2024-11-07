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

function getArtistList(cat: number, limit: number) {
  return requset.get('/artist/list', { params: { cat, limit } })
}

export {
  getArtistList,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
  getTopBanner
}
