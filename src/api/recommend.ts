import { requset } from '@/utils/http'

function getTopBanner() {
  return requset.get('/banner')
}

export {
  getTopBanner
}
