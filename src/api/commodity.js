import request from '@/utils/request'

export function publishCommodity (commodity) {
  return request({
    url: 'api/publish',
    method: 'put',
    data: {
      commodity
    }
  })
}

export function demandCommodity (commodity) {
  return request({
    url: 'api/demand',
    method: 'put',
    data: {
      commodity
    }
  })
}
