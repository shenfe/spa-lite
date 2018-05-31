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
            class="multi-input"
            :placeholder="item.placeholder || '请选择'"
            multiple
            filterable
            allow-create
            :popper-append-to-body="false"
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
          <el-switch v-model="form[item.name]"
            :active-text="item.activeText"
            :inactive-text="item.inactiveText"
            :disabled="!!item.disabled">
          </el-switch>
        </template>

        <!-- 滑块 -->
        <template v-if="item.type === 'range'">
          <el-slider v-model="form[item.name]"
            :min="item.min" :max="item.max" :step="item.step"
            :range="!!item.range" :disabled="!!item.disabled">
          </el-slider>
        </template>

        <!-- 日期时间 -->
        <template v-if="item.type === 'date'">
          <el-date-picker v-model="form[item.name]"
            :datetimerange="!!item.range"
            :type="item.range ? 'datetimerange' : 'datetime'"
            value-format="timestamp"
            placeholder="选择日期时间">
          </el-date-picker>
        </template>

        <!-- 上传 -->
        <template v-if="item.type === 'upload'">
          <el-upload :action="item.action"
            :accept="item.accept"
            :disabled="!!item.disabled">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">{{item.hint}}</div>
          </el-upload>
        </template>

      </el-form-item>
    </template>

    <el-form-item>
      <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
      <!-- <el-button @click="resetForm()">重置</el-button> -->
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
      formName: 'thisForm',
      rules,
      form
    }
  },
  methods: {
    onSubmit (form) {
      this.$refs[this.formName].validate(valid => {
        if (valid) {
          this.$emit('submit', JSON.parse(JSON.stringify(form)))
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

<style lang="scss">
.multi-input {
  .el-input__suffix, .el-select-dropdown {
    display: none;
  }
}
</style>
