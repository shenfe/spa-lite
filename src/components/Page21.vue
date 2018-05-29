<template>
  <div>
    <h1>Page21</h1>
    <my-form :ctx="form" />
  </div>
</template>

<script>
import MyForm from './Form'
export default {
  name: 'Page21',
  components: {
    MyForm
  },
  data () {
    return {
      form: {
        inline: false,
        labelPosition: 'left',
        fields: [
          {
            label: '单选',
            name: 'danxuan',
            type: 'radio',
            value: 'a',
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
            label: '多选',
            name: 'duoxuan',
            type: 'checkbox',
            value: ['a', 'd'],
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
            placeholder: '文本输入',
            rules: [
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
            multiline: true
          },
          {
            label: '计数器',
            name: 'jishuqi',
            type: 'number',
            value: 3,
            disabled: false,
            min: 1,
            max: 5,
            step: 1
          },
          {
            label: '下拉选择',
            name: 'xiala',
            type: 'select',
            value: '',
            clearable: true,
            disabled: false,
            multiple: false,
            placeholder: '下拉选择',
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
            value: [],
            disabled: false,
            placeholder: '下拉选择'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
