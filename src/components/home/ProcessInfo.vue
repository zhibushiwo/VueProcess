<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="扫描明细">
        <el-table :data="scanHistory" border style="width: 100%">
          <el-table-column prop="barcode" label="条码"></el-table-column>
          <el-table-column prop="datetime" label="扫描时间" :formatter="formatterTime"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="绑定物料">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="物料编码"></el-table-column>
          <el-table-column prop="number" label="物料名称"></el-table-column>
          <el-table-column prop="model" label="物料规格"></el-table-column>
          <el-table-column prop="barcode" show-overflow-tooltip label="条码"></el-table-column>
          <el-table-column prop="qty" label="数量"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="质检信息">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="物料编码"></el-table-column>
          <el-table-column prop="number" label="物料名称"></el-table-column>
          <el-table-column prop="model" label="物料规格"></el-table-column>
          <el-table-column prop="barcode" show-overflow-tooltip label="条码"></el-table-column>
          <el-table-column prop="qty" label="数量"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "ProcessInfo",
  data() {
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
    };
  },
  methods:{
    formatterTime: function (row,column) {
        var date = new Date(row.datetime);
        var hour = date.getHours() <= 9 ? "0" + date.getHours() : date.getHours()
        var min = date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()
        var sec = date.getSeconds() <= 9 ? "0" + date.getSeconds() : date.getSeconds()
        return hour + ":" + min + ":" + sec;
    },
  },
  computed:{
    ...mapGetters(
      ['scanHistory']
    )
  }
};
</script>
<style scoped>
</style>
