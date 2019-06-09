<template>
    <div>
        <el-row type="flex" justify="center">
             <el-col :span="1">
                 <img class="logoimg" src="../assets/logo.png" />
             </el-col>
             <el-col :span="10">
                <el-menu class="el-menu-demo" mode="horizontal" background-color="#393d49" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">70</el-menu-item>
                    <el-menu-item index="2">80</el-menu-item>
                    <el-menu-item index="3">首道工序</el-menu-item>
                </el-menu>
             </el-col>
             <el-col :span="12" style="text-align:right">
                 <span>admin</span>
             </el-col>
        </el-row>

    </div>
</template>
<script>
export default {
    name:"process-head"
}
</script>
<style scoped>
    .logoimg{
        height: 60px;
    }
</style>

