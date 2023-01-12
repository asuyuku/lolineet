import request from '@/util/request'
export function animeList(data){
    return request({
        url: '/standard/anime/list',
        method: 'get',
        data
    })
}
