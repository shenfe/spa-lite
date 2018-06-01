# vue-eleme-tpl

> 基于Vue.js框架及其下衍生类库，实现单页面应用。集成了Element-UI。

## 特性

* 使用Vue全家桶
* 使用element-ui
* 使用axios
* 支持markdown直接写页面组件！
* 支持json配置页面表单组件！
* 支持yaml配置接口！
* 开发、测试、线上三种环境

## 命令

### 本地开发

```
$ npm run serve
```

### 为生产环境打包

```
$ npm run build
```

### 启动测试服务器

```
$ npm test
```

## 文件结构

| 角色 | 目录 | 备注 |
| :---: | :--- | :--- |
| 发布的资源 | dist | 前端所有对外发布的静态资源文件，都在这里 |
| 公共静态资源 | public | 打包后会并入dist |
| 源码 | src | |
| 前端路由 | src/router | 单页应用的页面路由由前端控制 |
| 后端接口调用 | src/api | |
| 页面组件 | src/view | 构成页面的大组件，参与路由 |
| 根组件 | src/view/index.vue | 页面主框架 |
| 模块组件 | src/component | 页面内划分的组件 |
| 资源文件 | src/asset | 其他公共资源，如图片，字体，公共样式，第三方库等 |
| mock数据 | mock | 定义接口假数据，用于前端开发及前后端联调，与`src/api`相配合 |

## 开发

### 接口联调

开发环境下，在`vue.config.js`的`devServer`中配置前端本地开发服务器的端口号；另外，前端请求后端接口时，域和端口可能有别于前端devServer，如果需要，则在`src/api/index.js`的API_URL里改动。

### 页面

1. 在view中新建页面级组件
2. 根据实际情况，适当将页面划分为组件，在component下；并在页面组件中配置子路由
3. 在router中添加该页面及对应路由路径
