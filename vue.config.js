const fs = require('fs')
const path = require('path')

const { base, apis } = require('./mock')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader'
            }
          ]
        },
        {
          test: /\.ya?ml$/,
          use: [
            {
              loader: 'json-loader'
            },
            {
              loader: 'yaml-loader'
            }
          ]
        }
      ]
    }
  },
  devServer: {
    port: 8080,
    proxy: null, // string | Object
    before: app => { // app is an express instance
      console.log('Express app launching...')
      for (let name in apis) {
        if (!apis.hasOwnProperty(name)) continue
        let { url, method, expect } = apis[name]
        url = url.startsWith('/') ? url : `${base || '/'}${url}`
        app[method || 'get'](url, function (req, res) {
          res[typeof expect === 'string' ? 'sendFile' : 'json'](expect)
        })
      }
    }
  }
}
