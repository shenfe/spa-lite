const type = value => {
  return Object.prototype.toString.call(value).match(/\s(.*)]$/)[1].toLowerCase()
}

const isSimple = value => {
  const t = type(value)
  switch (t) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'null':
    case 'undefined':
      return true
  }
}

const Store = {}

const get = proppath => {
  let target = Store
  const parts = proppath.split('.')
  while (parts.length) {
    if (isSimple(target)) return
    let part = parts.shift()
    target = target[part]
  }
  return target
}

const listeners = {}

const nextTick = (fn, ...args) => {
  setTimeout(() => {
    fn(...args)
  })
}

const set = (proppath, value, force) => {
  let target = Store
  const parts = proppath.split('.')
  const curPath = []
  let parent
  let part
  while (parts.length) {
    if (isSimple(target)) {
      if (!force) {
        return {
          code: 1,
          message: `value error, proppath '${curPath.join('.')}'`
        }
      } else {
        target = parent[part] = {}
      }
    }
    part = parts.shift()
    curPath.push(part)
    parent = target
    target = parent[part]
  }
  parent[part] = value

  nextTick(() => {
    const cbs = listeners[proppath]
    if (!cbs || !cbs.length) return
    cbs.forEach(cb => {
      if (type(cb) !== 'function') return
      cb(value)
    })
  })
}

const watch = (proppath, callback, immediate) => {
  if (!listeners[proppath]) listeners[proppath] = []
  listeners[proppath].push(callback)

  immediate && callback(get(proppath))
}

export default {
  set,
  get,
  watch
}
