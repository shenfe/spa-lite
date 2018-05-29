<template>
  <el-form label-width="100px"
    :label-position="ctx.labelPosition"
    :ref="formName" :rules="rules" :inline="!!ctx.inline" :model="form">
    <template v-for="(item, index) of ctx.fields">
      <el-form-item :label="item.label" :key="index" :prop="rules.hasOwnProperty(item.name) ? item.name : undefined">

        <!-- 单选 -->
        <template v-if="item.type === 'radio'">
          <el-radio-group v-model="form[item.name]">
            <template v-for="(value, key) in item.options">
              <el-radio :disabled="!!value.disabled" :label="key" :key="key">{{value.text}}</el-radio>
            </template>
          </el-radio-group>
        </template>

        <!-- 多选 -->
        <template v-if="item.type === 'checkbox'">
          <el-checkbox-group v-model="form[item.name]">
            <template v-for="(value, key) in item.options">
              <el-checkbox :disabled="!!value.disabled" :label="key" :key="key" name="type">{{value.text}}</el-checkbox>
            </template>
          </el-checkbox-group>
        </template>

        <!-- 输入框 -->
        <template v-if="item.type === 'input'">
          <el-input v-model="form[item.name]"
            :type="item.multiline ? 'textarea' : undefined"
            :placeholder="item.placeholder || ''"
            :clearable="!item.multiline && item.clearable !== false"
            :disabled="!!item.disabled"
            :autosize="!!item.multiline">
          </el-input>
        </template>

        <!-- 计数器 -->
        <template v-if="item.type === 'number'">
          <el-input-number v-model="form[item.name]" controls-position="right"
            :disabled="!!item.disabled" :step="item.step"
            :min="item.min" :max="item.max"></el-input-number>
        </template>

        <!-- 下拉选择 -->
        <template v-if="item.type === 'select'">
          <el-select v-model="form[item.name]"
            :placeholder="item.placeholder || '请选择'"
            :clearable="!item.multiple && item.clearable !== false"
            :multiple="!!item.multiple"
            :disabled="!!item.disabled">
            <el-option v-for="(value, key) in item.options"
              :disabled="!!value.disabled"
              :label="value.text" :key="key" :value="key">
            </el-option>
          </el-select>
        </template>

        <!-- 多条输入 -->
        <template v-if="item.type === 'list'">
          <el-select v-model="form[item.name]"
            :placeholder="item.placeholder || '请选择'"
            multiple
            filterable
            allow-create
            default-first-option
            :disabled="!!item.disabled">
            <el-option v-for="(value, key) in item.options"
              :disabled="!!value.disabled"
              :label="value.text" :key="key" :value="key">
            </el-option>
          </el-select>
        </template>

        <!-- 开关 -->
        <template v-if="item.type === 'switch'">
        </template>

        <!-- 滑块 -->
        <template v-if="item.type === 'range'">
        </template>

        <!-- 日期时间 -->
        <template v-if="item.type === 'time'">
        </template>

        <!-- 上传 -->
        <template v-if="item.type === 'upload'">
        </template>

      </el-form-item>
    </template>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
      <el-button @click="resetForm()">重置</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    ctx: Object
  },
  data () {
    const form = this.ctx.data = {}
    const rules = this.ctx.rules = {}
    for (let item of this.ctx.fields) {
      if (item.label == null) {
        item.label = item.name
      }
      if (typeof item.rules === 'object') {
        if (Array.isArray(item.rules)) {
          rules[item.name] = item.rules
        } else {
          rules[item.name] = [item.rules]
        }
      }
      form[item.name] = item.value
    }
    return {
      formName: 'thisDamnForm',
      rules,
      form
    }
  },
  methods: {
    onSubmit (form) {
      this.$refs[this.formName].validate(valid => {
        if (valid) {
          this.$emit('submit', form)
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.$refs[this.formName].resetFields()
    }
  }
}
</script>
