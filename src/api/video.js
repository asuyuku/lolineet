import request from '@/util/request'
export function recommend(data){
    return request({
        url: '/index/recommend',
        method: 'get',
        data
    })
}

export function videoDetail(params={}){
    return request({
        url: '/standard/video/getVideoDetail',
        method: 'get',
        params,
    })
}