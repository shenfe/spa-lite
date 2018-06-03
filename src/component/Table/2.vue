<template>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="250" border>
      <el-table-column prop="name" label="名称" width="160" fixed></el-table-column>
      <el-table-column prop="user" label="所有者" width="120"></el-table-column>
      <el-table-column prop="desc" label="备注"></el-table-column>
      <el-table-column prop="recent" label="最近更新" width="200"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small"
            @click.native.prevent="displayRowData(scope.$index, tableData)">
            详细
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination style="text-align: right" :page-size="10"
      :total="total"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
      layout="total, prev, pager, next, jumper">
    </el-pagination>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleCloseDialog">
      <!-- 弹框内容begin -->
      <pre>{{JSON.stringify(dialogData, null, 4)}}</pre>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
      <!-- 弹框内容end -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表格
      tableData: [],

      // 分页器
      pageSize: 10,
      currentPage: 1,
      total: 100,

      // 对话框
      dialogTitle: '详细信息',
      dialogVisible: false,
      dialogData: null
    }
  },
  beforeMount () {
    this.fetchTableData()
  },
  methods: {
    displayRowData (index, tdata) {
      console.log('current row data', tdata[index])

      this.dialogVisible = true
      this.dialogData = tdata[index]
    },
    fetchTableData () {
      console.table({
        pageSize: this.pageSize,
        pageIndex: this.currentPage - 1
      })

      // Let's simulate a request and its response
      setTimeout(() => {
        const responseData = {
          total: 100,
          list: Array(10).fill(0).map(() => ({ // Let's simulate some data
            name: '' + Date.now() + '_' + Math.round(Math.random() * 1000),
            user: 'shenke',
            desc: '数据集的描述',
            recent: '2018-06-01 00:00:00'
          }))
        }

        this.total = responseData.total
        this.tableData.splice(0, this.tableData.length, ...responseData.list)
      })
    },
    handleCurrentChange (curPage) {
      this.currentPage = curPage
      this.fetchTableData()
    },
    handleCloseDialog (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
