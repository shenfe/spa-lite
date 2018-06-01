# api

> 后端接口调用定义。

## 接口基地址

可以在config.yaml中定义接口url的基地址。

## 编写一个接口调用

1. 使用有意义的文件名新建一个yaml配置，定义以下字段
    * url：接口地址；必填
    * method：HTTP方法，如get、post；默认为get
    * options：请求的其他配置，格式参考[request-config](https://github.com/axios/axios#request-config)
    * expect：接口返回数据期望格式；可以是map，也可以是字符串；如果是字符串，则代表假数据文件在mock目录下的相对路径，默认在mock下查找同名的json文件

1. 在`index.js`最后对其进行import和register

    register函数接受3个参数，分别是名称、配置、接口响应处理函数,其中前2个参数必选

1. 在config.yaml中的`apis`中添加名称

建议配置文件名称与注册名称相同，或者是前者包含后者的关系。
