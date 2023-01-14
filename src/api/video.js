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

export function uploadVideo(data){
    return request({
        url: '/standard/video/uploadVideo',
        method: 'post',
        data
    })
}

export function saveVideo(data){
    return request({
        url: '/standard/video/saveVideo',
        method: 'post',
        data
    })
}