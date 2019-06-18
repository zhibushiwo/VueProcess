<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="1">
        <img class="logoimg" src="../assets/logo.png">
      </el-col>
      <el-col :span="10">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#393d49"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" @click="dialogVisible = true">{{processName}}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="12" style="text-align:right">
        <el-dropdown  trigger="click">
          <span class="el-dropdown-link">
            {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-dialog title="请选择工序" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-select v-model="selectId" placeholder="请选择工序" style="width:100%">
        <el-option v-for="item in flowList" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-dialog>

    <el-dialog title="请扫入人员" :visible="showUser" width="30%">
      <el-input style="width:100%" v-focus @keyup.enter.native="setUser" v-model="user"></el-input>
    </el-dialog>

  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "process-head",
  data() {
    return {
      dialogVisible: false,
      selectId: "",
      user:""
    };
  },
  directives:{
    focus:{
      inserted : (el)=>{
        let input = el.querySelector("input") 
        input.focus()
      },
      update: (el)=>{
        let input = el.querySelector("input") 
        input.focus()
      }
    }
  },
  computed: {
      processName(){
          let pro = this.flowList.filter(item=>{
              return item.id==this.processId
          })
          return pro.length>0?pro[0].name:""
      },
      showUser(){
        return this.userName==""
      },
    ...mapGetters(["processId","userName","flowList"])
  },
  methods: {
    handleClose(done) {
      if (!this.processId || this.processId == 0) {
        this.$message("请选择工序");
      } else {
        done();
      }
    },
    setUser(){
      if(this.user){
        this.setUserName(this.user)
      }
    },
    logout(){
      this.setUserName("")
    },
    ...mapActions(["setProcessID","setUserName"])
  },
  created() {
    if (!this.processId || this.processId == 0) {
        if(localStorage.getItem("processId")){
            this.setProcessID(parseInt(localStorage.getItem("processId")))
        }else{
            this.dialogVisible = true;
        }
    }
    if(localStorage.getItem("userName")){
          this.setUserName(localStorage.getItem("userName"))
     }
  },
  watch: {
    selectId(val) {
      this.setProcessID(val);
    },
    userName(val){
      this.user = val==""?"":this.user;
    }
  }
};
</script>
<style scoped>
.logoimg {
  height: 60px;
}
.el-dropdown-link{
  color:#fff
}
</style>

