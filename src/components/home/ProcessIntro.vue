<template>
  <div>
    <el-dialog  :visible="showIntro" width="40%" :before-close="close">
        <div slot="title" style="color:cornflowerblue">
             <i class="el-icon-chat-line-square"></i>说明
        </div>
      <el-row>
        <el-col :span="14" class="intro">
            <p>
                练手向作品，项目直接用vue-cli创建，直接vue全家桶。简单的模拟了流水线上的操作。
            </p>
            <p>
                项目结合了公司做的系统，做了个简单的样例，是纯前端的页面，不含后端，
                不过用axios获取本地的json来模拟了一下后端获取数据，然后用localstorage模拟储存了数据。
                所以还是比较简单的~
            </p>
        </el-col>
        <el-col :span="5">
          <h2>技术栈</h2>
          <ul>
            <li>
              <input type="checkbox" checked disabled>vue
            </li>
            <li>
              <input type="checkbox" checked disabled>element-ui
            </li>
            <li>
              <input type="checkbox" checked disabled>vuex
            </li>
            <li>
              <input type="checkbox" checked disabled>vue-router
            </li>
            <li>
              <input type="checkbox" checked disabled>axios
            </li>
            <li>
              <input type="checkbox" checked disabled>echarts
            </li>
            <li>
              <input type="checkbox" checked disabled>vue-qr
            </li>
          </ul>
        </el-col>
        <el-col :span="5">
          <h2>操作说明</h2>
          <ul>
            <li>
              <input type="checkbox" checked disabled>选择工序
            </li>
            <li>
              <input type="checkbox" checked disabled>登录操作员
            </li>
            <li>
              <input type="checkbox" checked disabled>选择计划
            </li>
            <li>
              <input type="checkbox" checked disabled>打印/补打印
            </li>
            <li>
              <input type="checkbox" checked disabled>投料
            </li>
            <li>
              <input type="checkbox" checked disabled>扫入条码
            </li>
            <li>
              <input type="checkbox" checked disabled>质检
            </li>
            <li>
              <input type="checkbox" checked disabled>设备报修
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "process_intro",
  computed: {
    ...mapGetters(["showIntro"])
  },
  methods: {
    close() {
      this.setShowIntro(false);
    },
    ...mapActions(["setShowIntro"])
  }
};
</script>
<style scoped>
h2{
    font-size: 16px;
    color: brown
}
li {
  margin: 7px 3px;
  font-size: 16px;
}

li input {
  margin-right: 5px;
  vertical-align: middle;
}
.intro{
    padding: 0px 15px;
    font-size: 16px;
    line-height: 1.4;
    text-indent: 30px
}
p{
    margin-bottom: 7px
}
</style>

