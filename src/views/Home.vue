<template>
    <el-container class="content">
      <el-header>
        <ProcessHead></ProcessHead>
      </el-header>
      <el-main>
        <ProcessMain></ProcessMain>
      </el-main>
      <el-footer>
        <ProcessFoot></ProcessFoot>
      </el-footer>
    </el-container>
</template>

<script>
import ProcessHead from "@/components/ProcessHead"
import ProcessFoot from "@/components/ProcessFoot"
import ProcessMain from "@/components/ProcessMain"


export default {
  name: 'home',
  components:{
    ProcessHead,ProcessFoot,ProcessMain
  }
}
</script>
<style scoped>
  .content{
    height: 100%;
  }
  .el-header,.el-footer{
   background: #393d49;
   color: aliceblue;
   padding: 0;
   line-height: 60px;
  }
</style>

