<template>
  <div>
    <el-dialog
      title="质检(测试时，5秒后和10秒后分别模拟设备回传信息)"
      width="80%"
      :visible="showQC"
      :close-on-press-escape="false"
      :show-close="false"
    >
      <el-table :data="qcTest" border style="width: 100%">
        <el-table-column prop="name" label="质检项目"></el-table-column>
        <el-table-column prop="ismanual" label="质检方式">
          <template slot-scope="scope">{{scope.row.ismanual?"手动填写":"设备回传"}}</template>
        </el-table-column>
        <el-table-column prop="type" label="判断方式">
          <template slot-scope="scope">{{scope.row.type==1?"NG/OK":"大于0,小于10"}}</template>
        </el-table-column>
        <el-table-column prop="result" label="质检结果">
          <template slot-scope="scope">
            <div v-if="!scope.row.ismanual">{{scope.row.result}}</div>
            <div v-else-if="scope.row.type==1">
              <el-radio-group v-model="scope.row.result">
                <el-radio-button label="NG"></el-radio-button>
                <el-radio-button label="OK"></el-radio-button>
              </el-radio-group>
            </div>
            <div v-else>
              <el-input type="number" v-model.lazy="scope.row.result" @change="qcMatch"></el-input>
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
import { Loading } from 'element-ui';
export default {
  name: "process_qctest",
  data() {
    return {
      show: false,
      input: "",
      changed: false,
      qcTest: [
        {
          name: "质检一",
          ismanual: false,
          type: 1, //1为NG/OK,2为大小判断
          result: ""
        },
        {
          name: "质检二",
          ismanual: false,
          type: 2,
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
  computed: {},
  props: ["showQC"],
  methods: {
    cancel() {
      this.$confirm("确认取消测试？")
        .then(_ => {
          this.$emit("cancel");
          done();
        })
        .catch(_ => {});
    },
    qcMatch() {
      //先判断是否全部检测完成，再判断检测结果
      let allTest = this.qcTest.some(q => {
        return q.result == "";
      });
      if (!allTest) {
        let result = this.qcTest.every(q => {
          if (q.type == 1) {
            return q.result == "OK";
          } else {
            return q.result >= 0 && q.result <= 10;
          }
        });
        if (result) {
          this.$message({
            message: "质检合格，等待设备放行",
            type: "success"
          });
          const loading  = Loading.service({
            lock: true,
            text: "等待。。",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.3)"
          });
          setTimeout(() => {
            loading.close();
           this.$emit('update:showQC', false)
          }, 2000);
        } else {
          this.$message({
            message: "质检不合格,请返修后重新检测",
            type: "error"
          });
           this.$emit('update:showQC', false)
        }
      }
    }
  },
  watch: {
    showQC(val) {
      if (val) {
        this.qcTest = [
          {
            name: "质检一",
            ismanual: false,
            type: 1, //1为NG/OK,2为大小判断
            result: ""
          },
          {
            name: "质检二",
            ismanual: false,
            type: 2,
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
        ];
        setTimeout(() => {
          let rand = Math.random() > 0.3 ? "OK" : "NG";
          this.qcTest.splice(0, 1, {
            name: "质检一",
            ismanual: false,
            type: 1, //1为NG/OK,2为大小判断
            result: rand
          });
        }, 5000);
        setTimeout(() => {
          let rand = parseInt(Math.random() * 15);
          this.qcTest.splice(1, 1, {
            name: "质检二",
            ismanual: false,
            type: 2,
            result: rand
          });
        }, 10000);
      }
    },
    qcTest: {
      handler: function(newVal, oldVal) {
        console.log(newVal[3].result, oldVal[3].result);
        if (newVal[3].result == oldVal[3].result) {
          this.qcMatch();
        }
      },
      deep: true
    }

  }
};
</script>
