<template>
    <div>
        <div class="title">
            <span class="info">本机台绑定信息</span>
            <div style="float:right">
                <el-input v-if="showInput" class="material_input" size="small" v-model="barcode" @keyup.enter.native="submit" @blur="showInput=false"></el-input>
                <el-button @click="showInput=!showInput;barcode=''" type="primary" size="medium">投料</el-button>
            </div>
            <div class="clear"></div>
        </div>
        <el-table :data="tableData" border>
            <el-table-column prop="name" label="物料编码"></el-table-column>
            <el-table-column prop="number" label="物料名称"></el-table-column>
            <el-table-column prop="model" label="物料规格"></el-table-column>
            <el-table-column prop="barcode" show-overflow-tooltip label="条码" width="200"></el-table-column>
            <el-table-column prop="qty" label="数量"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name:"ProcessMaterial",
    data(){
        return {
            showInput:false,
            barcode:"",
            tableData: [
            {
            number: "GS270",
            name: "钢丝270",
            model: "301",
            barcode: "SHN1905210000165",
            qty: 999
            },
            {
            number: "GS270",
            name: "钢丝270",
            model: "301",
            barcode: "SHN1905210000165",
            qty: 999
            },
            {
            number: "GS270",
            name: "钢丝270",
            model: "301",
            barcode: "SHN1905210000165",
            qty: 999
            },
            {
            number: "GS270",
            name: "钢丝270",
            model: "301",
            barcode: "SHN1905210000165",
            qty: 999
            }
        ]
        }
    },
    watch:{
        showInput(value){
            if(value){
                this.$nextTick(function () {
                    let dom = document.querySelector(".material_input");
                    let input = dom.querySelector("input");
                    input.focus()
                })
            }
        }
    },
    methods:{
        submit(){
            this.$message("投料成功");
            this.barcode=""
        }
    }
}
</script>
<style scoped>
    .title{
        margin-bottom: 7px;
    }
    .material_input{
        width: 200px;
        margin: 0 7px;
    }
    .info{
        line-height: 2
    }
</style>
