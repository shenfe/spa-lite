import axios from 'axios'

import CONF from './config.yaml'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const API_URL = IS_PRODUCTION ? CONF.base : `http://localhost:8080${CONF.base}` // NOTICE: here set the development server host

let $axios = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
})

// Request Interceptor
$axios.interceptors.request.use(function (config) {
  config.headers['Authorization'] = 'Fake Token'
  return config
})

// Response Interceptor to handle and log errors
$axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // Handle Error
  console.log(error)
  return Promise.reject(error)
})

/**
 * Register a method for a certain API
 * @param {*} name    API name, required
 * @param {*} conf    API config, required
 * @param {*} handler response handler function
 */
const registerAPI = (
  name,
  { url, method, options } = {},
  handler = (response => response.data)
) => {
  method = method || 'get'
  APIs[name] = (data, opts) => {
    options = {
      ...options,
      ...opts
    }
    let p
    if (method[0] !== 'p') { // like 'get'
      options.params = data
      p = $axios[method](url, options)
    } else { // like 'post'
      p = $axios[method](url, data, options)
    }
    return p.then(handler)
  }
}

const APIs = {

  // Example
  api0 () {
    return $axios.get(`res/0`)
      .then(response => {
        // `response`中包含data, status, statusText, headers, config
        console.log(response)
        return response.data
      })
  }

}

// Import APIs and register each as a named method

// Example
import a1 from './api1.yaml'
registerAPI('api1', a1, response => {
  const data = response.data
  data.name = data.username
  delete data.username
  return data
})

// Example
import a2 from './api2.yaml'
registerAPI('api2', a2)

export default APIs
