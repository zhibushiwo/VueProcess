import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const type = {
  SCAN_BARCODE:'SCAN_BARCODE',
  SET_TASK_ID:'SET_TASK_ID'
}
const state ={
  scanHistory:[],
  taskId:0
}
const getters = {
  scanHistory:state=>state.scanHistory.slice(0,5),
  taskId :state=>state.taskId
}
const mutations={
  [type.SCAN_BARCODE](state,barcode){
    state.scanHistory.unshift({
      barcode:barcode,
      datetime:new Date()
    })
  },
  [type.SET_TASK_ID](state,id){
    state.taskId = id;
  }
}

const actions = {
  scanBarcode:({commit},barcode)=>{
    commit(type.SCAN_BARCODE, barcode)
  },
  setTaskID:({commit},taskId)=>{
    commit(type.SET_TASK_ID, taskId)
  }
}

export default new Vuex.Store({
  state,getters,mutations,actions
})
