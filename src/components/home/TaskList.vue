<template>
  <div class="taskWrap">
    <div class="task"  v-for="item in tasks" :key="item.id" @click="setTaskID(item.id)">
      <div :class="[{active:item.id==taskId},'title']" >
        计划单：
        <span class>{{item.billno}}</span>
      </div>
      <div class="panel-body">
        <ul class>
          <li class>
            <i class="el-icon-caret-right"></i>产品编码:
            <strong id>{{item.number}}</strong>
          </li>
          <li class>
            <i class="el-icon-caret-right"></i>产品名称:
            <strong id>{{item.name}}</strong>
          </li>
          <li class>
            <i class="el-icon-caret-right"></i>产品规格:
            <strong id>{{item.model}}</strong>
          </li>
          <li class>
            <i class="el-icon-caret-right"></i>计划数量:
            <strong id>{{item.qty}}</strong>
          </li>
          <li class>
            <i class="el-icon-caret-right"></i>生产数量:
            <strong>{{item.finish}}</strong>
          </li>
          <li class>
            <el-progress :percentage="50"></el-progress>
          </li>
          <li v-if="item.id==taskId">
            <el-button class="btn_print" size="small" type="danger" @click="printBarcode">打印</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
import {mapActions,mapGetters}  from 'vuex'
export default {
  name: "TaskList",
  data(){
      return{
      }
  },
  props:["tasks"],
  computed:{
    ...mapGetters([
      "taskId"
    ])
  },
  methods:{
      printBarcode(){
        let _this = this;
        setTimeout(function(){
          _this.$message("条码已打印！")
        },1000)
      },
      ...mapActions(
        ["setTaskID"]
      )
  }
};
</script>
<style scoped>
  .taskWrap{
    width: auto;
    min-width: 100%;
    overflow: auto;
    padding: 10px;
    display: flex;
  }
    .title{
    text-align: center;
    background: #5f6a7b;
    color: #fff;
    height: 35px;
    line-height: 35px;
  }
  .btn_print{
      width: 100%
  }
  li{
      font-size: 14px;
      margin: 3px 0;
  }
  .task{
      margin: 10px;
      width: 220px;
      min-width: 220px;
      background-color: snow
  }
  .active{
       background: #049588;
  }
  .taskWrap::-webkit-scrollbar-track-piece {
  width: 10px;
  background-color: #4e4e5a;
}

.taskWrap::-webkit-scrollbar {
  width: 10px;
  height: 4px;
}

.taskWrap::-webkit-scrollbar-thumb {
  height: 50px;
  background: #3fb560;
  cursor: pointer;
}

.taskWrap::-webkit-scrollbar-thumb:hover {
  background: #3fb560;
  cursor: pointer;
}
</style>

