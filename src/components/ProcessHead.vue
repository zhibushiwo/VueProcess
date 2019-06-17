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
        <el-option v-for="item in list" :key="item.id" :label="item.name" :value="item.id"></el-option>
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
      list: [
        {
          name: "第一道工序",
          id: 10
        },
        {
          name: "第二道工序",
          id: 20
        },
        {
          name: "第三道工序",
          id: 30
        },
        {
          name: "第四道工序",
          id: 40
        },
        {
          name: "第五道工序",
          id: 50
        },
        {
          name: "第六道工序",
          id: 60
        },
        {
          name: "第七道工序",
          id: 70
        },
        {
          name: "第八道工序",
          id: 80
        },
        {
          name: "第九道工序",
          id: 90
        },
        {
          name: "第十道工序",
          id: 100
        }
      ],
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
          let pro = this.list.filter(item=>{
              return item.id==this.processId
          })
          return pro.length>0?pro[0].name:""
      },
      showUser(){
        return this.userName==""
      },
    ...mapGetters(["processId","userName"])
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

