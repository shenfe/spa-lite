const fs = require('fs')
const path = require('path')

const yaml = require('js-yaml')

const getConf = (filepath) => {
  let conf = {}
  try {
    conf = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, filepath), 'utf8'))
  } catch (e) {}
  return conf
}

const getExpectDataHere = filename => {
  const fp = path.resolve(__dirname, `${filename}.json`)
  if (fs.existsSync(fp)) {
    // return JSON.parse(fs.readFileSync(fp, 'utf8'))
    return fp
  }
}

// Get API config from the config file in `src/api`
const apiConf = getConf('../src/api/config.yaml')

const repairConf = (conf, name) => {
  if (!conf.expect) {
    conf.expect = getExpectDataHere(name)
  } else {
    if (typeof conf.expect === 'string') {
      conf.expect = getExpectDataHere(conf.expect)
    }
  }

  if (!conf.method) conf.method = 'get'

  return conf
}

if (apiConf.apis) {
  apiConf.apis = apiConf.apis.reduce((obj, name) => {
    const c = getConf(`../src/api/${name}.yaml`)
    repairConf(c, name)
    obj[name] = c
    return obj
  }, {})
} else {
  apiConf.apis = {}
}

const extraApis = {

  // Example
  res0: {
    url: '/api/res/0',
    expect: {
      code: 0,
      message: 'success',
      data: {
        hello: 'world'
      }
    }
  },
  userinfo: {
    url: '/userinfo',
    expect: {
      data: {
        name: 'hengwu'
      }
    }
  }

}

for (let name in extraApis) {
  if (!extraApis.hasOwnProperty(name)) continue
  apiConf.apis[name] = repairConf(extraApis[name], name)
}

// console.log('API Config', apiConf)

module.exports = apiConf
