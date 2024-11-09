import { requset } from '@/utils/http'

function getSongDetail(ids: number) {
  return requset('/song/detail', { params: { ids } })
}

function getSongLyric(id: number) {
  return requset('/lyric', { params: { id } })
}

export {
  getSongDetail,
  getSongLyric
}
