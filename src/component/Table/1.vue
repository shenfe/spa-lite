<template>
  <el-table :data="tableData" style="width: 100%" max-height="250" border>
    <el-table-column prop="name" label="名称" width="160" fixed></el-table-column>
    <el-table-column prop="user" label="所有者" width="120"></el-table-column>
    <el-table-column prop="desc" label="备注"></el-table-column>
    <el-table-column prop="recent" label="最近更新" width="200"></el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small"
          @click.native.prevent="deleteRow(scope.$index, tableData)">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  },
  data () {
    return {
      tableData: Array(10).fill(0).map(() => ({ // Let's simulate some data
        name: '' + Date.now() + '_' + Math.round(Math.random() * 1000),
        user: 'shenke',
        desc: '数据集的描述',
        recent: '2018-06-01 00:00:00'
      }))
    }
  }
}
</script>
