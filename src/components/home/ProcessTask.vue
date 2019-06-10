<template>
  <div>
    <el-input placeholder="请输入内容" @keydown.enter.native="submitBarcode" v-model="barcode">
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
import { mapActions,mapGetters } from 'vuex'

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
  computed:{
    ...mapGetters([
      "taskId"
    ])
  },
  methods:{
    showTask(){
       this.dialogVisible = true
    },
    selectTask(data){
      this.tasks=data;
    },
    submitBarcode(){
      if(this.taskId==0){
        this.$message("请选择好计划")
        this.barcode="";
        return false
      }
      if(this.barcode.indexOf('bar')!=0){
        this.$message("条码需要已bar开头")
        this.barcode="";
        return false
      }
      this.scanBarcode(this.barcode);
      this.barcode="";
      
    },
    ...mapActions([
      'scanBarcode'
    ])
  }
};
</script>
<style scoped>


</style>
