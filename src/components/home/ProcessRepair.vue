<template>
  <div>
    <el-dialog
      width="60%"
      :visible="facilityState=='REPAIR'"
      :show-close="false"
    >
    <div slot="title" class="title">
        设备报修中<i class="el-icon-loading"></i>
    </div>
    <div class="content">
        <vue-qr :text='barcode'  :size="400" :bgSrc='logo'></vue-qr>
        <div>
            <el-button type="danger" @click.native="setFacilityState('')" >维修完成</el-button>
        </div>
    </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import VueQr from 'vue-qr'
import logo from '@/assets/logo.png'
export default {
  name: "process_repair",
  data() {
    return {
        logo
    };
  },
  components:{
      VueQr
  },
  methods:{
      ...mapActions([
          "setFacilityState"
      ])
  },
  computed: {
      barcode(){
          return "Rep"+ Math.random().toString(32).substr(2).toUpperCase()
      },
    ...mapGetters(["facilityState"])
  },
  watch: {
    facilityState(val) {}
  }
};
</script>
<style scoped>
    .title{
        font-size: 18px
    }
    .content{
        text-align: center
    }
</style>

