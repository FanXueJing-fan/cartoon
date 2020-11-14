import axios from 'axios'
import { Toast } from 'vant'

// 创建实例
const instance = axios.create({
  // options    方便你后期上线的时候，更改主机名
  // 【注】baseURL  cartoon.js中的URL   vue.config.js中的target 三者路径的关系
  baseURL: 'http://localhost:8080',
  // 设置超时时间
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  Toast.fail('网络异常')
  return Promise.reject(error)
})

export default instance
