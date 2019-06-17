<template>
    <div>
        <el-dialog title="质检" width="80%" :visible.sync="show" close-on-press-escape=false show-close=false >
            <el-table :data="qcTest" border style="width: 100%" >
                <el-table-column prop="name" label="质检项目"></el-table-column>
                <el-table-column prop="ismanual" label="质检方式"></el-table-column>
                <el-table-column prop="type" label="类型"></el-table-column>
                <el-table-column prop="result" label="质检结果">
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:"process_qctest",
    data(){
        return {
            show:false,
            qcTest:[
                {
                    name:"质检一",
                    ismanual:false,
                    type:1,
                    result:""
                },
                {
                    name:"质检二",
                    ismanual:false,
                    type:1,
                    result:""
                },
                {
                    name:"质检三",
                    ismanual:true,
                    type:1,
                    result:""
                },
                {
                    name:"质检四",
                    ismanual:true,
                    type:2,
                    result:""
                }
            ]
        }
    }
}
</script>
