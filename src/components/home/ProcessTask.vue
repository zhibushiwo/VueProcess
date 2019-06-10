<template>
  <div>
    <el-input placeholder="请输入内容" @keydown.enter.native="scanBarcode" v-model="barcode">
      <template slot="prepend">条码</template>
      <el-button slot="append" type="primary" class="btn_SelectTask" @click="showTask">选择计划</el-button>
    </el-input>
    <TaskList :tasks="tasks"></TaskList>
    <TaskTable :dialogVisible.sync="dialogVisible" @handelConfirm="selectTask"></TaskTable>
  </div>
</template>
<script>
import TaskTable from '@/components/home/TaskTable'
import TaskList from '@/components/home/TaskList'

export default {
  name: "ProcessTask",
  data(){
    return {
      dialogVisible:false,
      tasks:[],
      barcode:""
    }
  },
  components:{
    TaskTable,TaskList
  },
  methods:{
    showTask(){
       this.dialogVisible = true
    },
    selectTask(data){
      this.tasks=data;
    },
    scanBarcode(){
      if(this.barcode.indexOf("bar")<0){
        this.$message("条码需要以bar开头");
        this.barcode="";
        return false
      }
    }
  }
};
</script>
<style scoped>


</style>
