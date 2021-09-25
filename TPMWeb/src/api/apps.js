import request from '@/utils/request'

// 应用搜索接口
export function apiAppsSearch(requestBody) {
  return request({
    url: '/api/application/search',
    method: 'post',
    data: requestBody
  })
}

// 产品选择项目列表
export function apiAppsProduct() {
  return request({
    url: '/api/application/product',
    method: 'get'
  })
}

// 调用应用增加/修改统一接口
export function apiAppsCommit(requestBody) {
  return request({
    url: '/api/application/update',
    method: 'post',
    data: requestBody
  })
}
