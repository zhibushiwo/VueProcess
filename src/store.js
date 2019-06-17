import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const type = {
  SCAN_BARCODE:'SCAN_BARCODE',
  SET_TASK_ID:'SET_TASK_ID',
  SET_PROCESS_ID:'SET_PROCESS_ID',
  SET_FACILITY_STATE:'SET_FACILITY_STATE'

}
const state ={
  scanHistory:[],
  taskId:0,
  processId:0,
  facilityState:""
}
const getters = {
  scanHistory:state=>state.scanHistory.slice(0,5),
  taskId :state=>state.taskId,
  processId:state=>state.processId,
  facilityState:state=>state.facilityState
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
  },
  [type.SET_PROCESS_ID](state,id){
    localStorage.setItem("processId",id)
    state.processId = id;
  },
  [type.SET_FACILITY_STATE](state,fstate){
    localStorage.setItem("facilityState",fstate)
    state.facilityState = fstate;
  }
}

const actions = {
  scanBarcode:({commit},barcode)=>{
    commit(type.SCAN_BARCODE, barcode)
  },
  setTaskID:({commit},taskId)=>{
    commit(type.SET_TASK_ID, taskId)
  },
  setProcessID:({commit},processId)=>{
    commit(type.SET_PROCESS_ID,processId)
  },
  setFacilityState:({commit},fstate)=>{
    commit(type.SET_FACILITY_STATE,fstate)
  }
}

export default new Vuex.Store({
  state,getters,mutations,actions
})
