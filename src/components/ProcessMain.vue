<template>
    <div class="main">
        <el-row>
            <el-col :span="14" style="padding-right:5px">
                <el-card class="task">
                    <ProcessTask></ProcessTask>
                </el-card>
                <el-card class="process">
                    <ProcessFlow></ProcessFlow>
                </el-card>
                <el-card class="chart">
                    <ProcessChart></ProcessChart>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="material">
                    <ProcessMaterial></ProcessMaterial>
                </el-card>
                <el-card class="info">
                    <ProcessInfo></ProcessInfo>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import ProcessTask from '@/components/home/ProcessTask'
import ProcessFlow from '@/components/home/ProcessFlow'
import ProcessChart from '@/components/home/ProcessChart'
import ProcessInfo from '@/components/home/ProcessInfo'
import ProcessMaterial from '@/components/home/ProcessMaterial'



export default {
    name:"ProcessMain",
    components:{
        ProcessTask,ProcessFlow,ProcessChart,ProcessInfo,ProcessMaterial
    }
}
</script>
<style scoped>
    .task{
        height: 30vh;
    }
    .process{
        height: 15vh;
        margin: 8px 0;
    }
    .chart{
        height: 35vh;
    }
    .material{
        height: 40vh;
         margin-bottom: 7px;
    }
    .info{
        height: 40vh;
    }
</style>

