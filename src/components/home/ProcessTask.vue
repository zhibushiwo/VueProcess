<template>
  <div>
    <el-input placeholder="请输入内容">
      <template slot="prepend">条码</template>
      <el-button slot="append" type="primary" class="btn_SelectTask">选择计划</el-button>
    </el-input>
    <div class="taskWrap">
      <div class="" id style=" width: 240px">
        <div class="title">
          计划单：
          <span class>20190605</span>
        </div>
        <div class="panel-body">
          <ul class="">
              <li class>
                <i class="el-icon-caret-right"></i>产品编码:
                <strong id>右前座椅总成手向</strong>
              </li>
              <li class>
                <i class="el-icon-caret-right"></i>产品名称:
                <strong id>右前座椅总成四向</strong>
              </li>
              <li class>
                <i class="el-icon-caret-right"></i>产品规格:
                <strong id>右前座椅总成四向</strong>
              </li>
              <li class>
                <i class="el-icon-caret-right"></i>计划数量:
                <strong id>120</strong>
              </li>
              <li class>
                <i class="el-icon-caret-right"></i>生产数量:
                <strong>10</strong>
              </li>
              <li class>
                <el-progress :percentage="50"></el-progress>
              </li>
              <li style>
                <el-button class="btn_print" size="small" type="danger">打印</el-button>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProcessTask"
};
</script>
<style scoped>
  .title{
    text-align: center;
    background: #049588;
    color: #fff;
    height: 35px;
    line-height: 35px;
  }
  .btn_print{
      width: 100%
  }
  .taskWrap{
    width: 100%;
    overflow: auto;
    padding: 10px;
  }
</style>
