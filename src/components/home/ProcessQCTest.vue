<template>
  <div>
    <el-dialog
      title="质检"
      width="80%"
      :visible="showQC"
      :close-on-press-escape=false
      :show-close=false
    >
      <el-table :data="qcTest" border style="width: 100%">
        <el-table-column prop="name" label="质检项目"></el-table-column>
        <el-table-column prop="ismanual" label="质检方式">
            <template slot-scope="scope">
                {{scope.row.ismanual?"手动填写":"设备回传"}}
            </template>
        </el-table-column>
        <el-table-column prop="type" label="判断方式">
            <template slot-scope="scope">
                {{scope.row.type==1?"NG/OK":">0,<=10"}}
            </template>
        </el-table-column>
        <el-table-column prop="result" label="质检结果">
            <template slot-scope="scope">
                <div v-if="!scope.row.ismanual">
                    {{scope.row.result}}
                </div>
                <div v-else-if="scope.row.type==1">
                    <el-radio-group v-model="scope.row.result">
                    <el-radio-button label="NG"></el-radio-button>
                    <el-radio-button label="OK"></el-radio-button>
                    </el-radio-group>
                </div>
                <div v-else>
                    <el-input type="number" v-model="scope.row.result"></el-input>
                </div>
            </template>
        </el-table-column>
      </el-table>
      <div slot="footer">
        <el-button @click="cancel">取消测试</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "process_qctest",
  data() {
    return {
      show: false,
      qcTest: [
        {
          name: "质检一",
          ismanual: false,
          type: 1,
          result: ""
        },
        {
          name: "质检二",
          ismanual: false,
          type: 1,
          result: ""
        },
        {
          name: "质检三",
          ismanual: true,
          type: 1,
          result: ""
        },
        {
          name: "质检四",
          ismanual: true,
          type: 2,
          result: ""
        }
      ]
    };
  },
  props:["showQC"],
  methods: {
    cancel() {
      this.$confirm("确认取消测试？")
        .then(_ => {
          this.$emit("cancel")
          done();
        })
        .catch(_ => {});
    },
    init(){
        this.qcTest
    }

  }
};
</script>
