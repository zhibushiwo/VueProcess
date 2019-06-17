<template>
  <div id="footer">
    <el-button @click="backPrint">补打印</el-button>
    <el-button type="primary" @click="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">退出系统</el-button>
    <el-button type="danger" @click="repair">设备报修</el-button>
  </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "process-foot",
  computed:{
    ...mapGetters([
      "facilityState"
    ])
  },
  methods: {
    ...mapActions([
      "setFacilityState"
    ]),
    backPrint() {
      this.$prompt("请输入条码", "补打印", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern:/^bar/,
        inputErrorMessage:"条码以bar开头"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message:  value+"已打印"
          });
        })
        .catch(() => {
        });
    },
    repair(){
        this.$confirm('设备报修后将不能进行其他操作, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.setFacilityState("REPAIR")
          this.$message({
            type: 'success',
            message: '报修成功!'
          });
        }).catch(() => {
         
        });
    },
   
    primary() {
      this.$message("还没想好啥功能");
    }
  },
  created() {
    let fstate = localStorage.getItem("facilityState");
    console.log(fstate)
    if(fstate){
      this.setFacilityState(fstate)
      if(fstate=="REPAIR"){
        this.$message("该设备处于报修状态")
      }
    }
  },
  watch:{
    facilityState(val){
      if(!val){
        this.$message("已经修好了");
        this.setFacilityState("")
      }
    }
  }
};
</script>
<style scoped>
#footer {
  text-align: center;
}
</style>

