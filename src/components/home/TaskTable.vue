<template>
  <div>
    <el-dialog title="计划" width="80%" :visible.sync="show" @close="closeDialog">
      <el-table :data="tableData" border style="width: 100%" @selection-change="handelSelect">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="物料编码"></el-table-column>
        <el-table-column prop="number" label="物料名称"></el-table-column>
        <el-table-column prop="model" label="物料规格"></el-table-column>
        <el-table-column prop="billno" show-overflow-tooltip label="条码"></el-table-column>
        <el-table-column prop="qty" label="数量"></el-table-column>
        <el-table-column prop="finish" label="已完成"></el-table-column>
      </el-table>
      <el-pagination :page-size="7" layout="total, prev, pager, next" :total="25"></el-pagination>
      <div slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="handelConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: "TaskTable",
  props: ["dialogVisible"],
  
  data() {
    return {
      tableData: [],
      show: this.dialogVisible,
      selectData:[]
    };
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialogVisible", false);
    },
    handelSelect(selection){
        this.selectData = selection;
    },
    handelConfirm(){
        if(this.selectData.length==0){
          this.$message("请至少选择一个计划");
          return false;
        }
        this.show = false;
        this.$emit("handelConfirm", this.selectData);
    },
    ...mapActions(["getTaskList"])
  },
  computed:{
     taskId(){
         this.selectData.map(s=>{
             return s.id
         })
     }
  },
  watch: {
    dialogVisible() {
      this.show = this.dialogVisible;
    }
  },
  created(){
    this.getTaskList().then(r=>{
      console.log(r)
      this.tableData = r.data.tableData
    })  
  }
};
</script>
