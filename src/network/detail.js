import {request} from "./request";

export function getGoodsDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
