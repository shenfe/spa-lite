<template>
  <div>
    <my-form :ctx="form" @submit="onSubmit" />
  </div>
</template>

<script>
import MyForm from '@/component/base/Form'

export default {
  components: {
    MyForm
  },
  methods: {
    onSubmit (data) {
      console.log('submit', data)
    }
  },
  data () {
    return {
      form: {
        inline: false,
        labelPosition: 'left',
        fields: [
          {
            label: '单选', // 显示的标签；必填
            name: 'danxuan', // 定义的字段名；必填
            type: 'radio', // 表单项类型；必填
            value: 'a', // 默认值
            options: { // 选项
              'a': {
                text: '选项a'
              },
              'b': {
                text: '选项b'
              },
              'c': {
                text: '选项c',
                disabled: true // 该选项是否禁用
              }
            }
          },
          {
            label: '多选',
            name: 'duoxuan',
            type: 'checkbox',
            value: ['a', 'd'], // 多选的默认值是数组形式
            options: {
              'a': {
                text: '选项a'
              },
              'b': {
                text: '选项b'
              },
              'c': {
                text: '选项c',
                disabled: true
              },
              'd': {
                text: '选项d',
                disabled: true
              }
            }
          },
          {
            label: '文本输入',
            name: 'wenbenshuru',
            type: 'input',
            placeholder: '文本输入', // 无输入时的占位提示信息
            rules: [ // 字段校验规则，详见http://element-cn.eleme.io/#/zh-CN/component/form#biao-dan-yan-zheng
              { required: true, message: '请输入文本', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
          },
          {
            label: '文本输入',
            name: 'wenbenshuru2',
            type: 'input',
            placeholder: '文本输入',
            disabled: true
          },
          {
            label: '多行文本输入',
            name: 'duohangwenbenshuru',
            type: 'input',
            value: '2',
            placeholder: '多行文本输入',
            multiline: true // 是否是多行文本输入
          },
          {
            label: '计数器',
            name: 'jishuqi',
            type: 'number',
            value: 3,
            disabled: false,
            min: 1, // 最小值
            max: 5, // 最大值
            step: 1 // 步长
          },
          {
            label: '下拉选择',
            name: 'xiala',
            type: 'select',
            value: '',
            clearable: true, // 可清空
            disabled: false,
            multiple: false, // 是否多选
            placeholder: '下拉选择', // 无选择时的占位提示
            options: {
              'a': {
                text: '选项a'
              },
              'b': {
                text: '选项b'
              },
              'c': {
                text: '选项c',
                disabled: true
              }
            }
          },
          {
            label: '多条输入',
            name: 'duotiao',
            type: 'list',
            value: ['123'],
            disabled: false,
            placeholder: '多条输入'
          },
          {
            label: '开关',
            name: 'kaiguan',
            type: 'switch',
            value: true,
            disabled: false,
            activeText: '激活', // “开”对应的文案
            inactiveText: '不激活' // “关”对应的文案
          },
          {
            label: '滑块',
            name: 'huakuai',
            type: 'range',
            value: 10,
            range: false, // 是否选择范围（两端都可拖动）
            disabled: false,
            min: 0,
            max: 100,
            step: 5
          },
          {
            label: '日期',
            name: 'riqi',
            type: 'date',
            range: true // 是否选择范围
          },
          {
            label: '上传',
            name: 'shangchuan',
            type: 'upload', // 文件上传，详见http://element-cn.eleme.io/#/zh-CN/component/upload
            action: 'https://jsonplaceholder.typicode.com/posts/',
            accept: '',
            disabled: false,
            hint: '只能上传csv文件'
          }
        ]
      }
    }
  }
}
</script>
