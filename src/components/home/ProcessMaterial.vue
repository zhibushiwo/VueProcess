<template>
    <div>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="name" label="物料编码"></el-table-column>
              <el-table-column prop="number" label="物料名称"></el-table-column>
              <el-table-column prop="model" label="物料规格"></el-table-column>
              <el-table-column prop="barcode" show-overflow-tooltip label="条码"></el-table-column>
              <el-table-column prop="qty" label="数量"></el-table-column>
            </el-table>
    </div>
</template>
<script>
export default {
    name:"ProcessMaterial",
    data(){
        return {
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
    }
}
</script>
<style scoped>

</style>
