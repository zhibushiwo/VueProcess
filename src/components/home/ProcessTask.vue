<template>
  <div>
    <el-input placeholder="请输入内容" @keydown.enter.native="submitBarcode" v-model="barcode">
      <template slot="prepend">条码</template>
      <el-button slot="append" type="primary" class="btn_SelectTask" @click="showTask">选择计划</el-button>
    </el-input>
    <TaskList :tasks="tasks"></TaskList>
    <TaskTable :dialogVisible.sync="dialogVisible" @handelConfirm="selectTask"></TaskTable>
    <ProcessQCTest  :showQC.sync="showQC"   @cancel="cancelTest" ></ProcessQCTest>
  </div>
</template>
<script>
import TaskTable from '@/components/home/TaskTable'
import TaskList from '@/components/home/TaskList'
import ProcessQCTest from '@/components/home/ProcessQCTest'

import { mapActions,mapGetters } from 'vuex'
import { isNumber } from 'util';

export default {
  name: "ProcessTask",
  data(){
    return {
      dialogVisible:false,
      tasks:[],
      barcode:"",
      showQC:false
    }
  },
  components:{
    TaskTable,TaskList,ProcessQCTest
  },
  computed:{
    ...mapGetters([
      "taskId","processId"
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
      let id = this.barcode[this.barcode.length-1];
      if(isNaN(id)){
        this.$message("条码格式不正确")
        this.barcode="";
        return false
      }
      console.log(id+0)
      if((id+0)!=this.processId){
         this.$message(`条码正处于${id+0}工序`)
         this.barcode="";
         return false
      }
      this.scanBarcode(this.barcode);
      this.showQC=true
      this.barcode="";
    },
    cancelTest(){
       this.showQC=false
    },
    ...mapActions([
      'scanBarcode'
    ])
  }
};
</script>
<style scoped>


</style>
