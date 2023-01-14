import request from '@/util/request'
export function districtList(data){
    return request({
        url: '/district/getDistrictList',
        method: 'get',
        data
    })
}