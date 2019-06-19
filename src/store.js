import Vue from 'vue'
import Vuex from 'vuex'
import {getTask,getFlow} from '@/api/getData'

Vue.use(Vuex)

const type = {
  SCAN_BARCODE:'SCAN_BARCODE',
  SET_TASK_ID:'SET_TASK_ID',
  SET_PROCESS_ID:'SET_PROCESS_ID',
  SET_FACILITY_STATE:'SET_FACILITY_STATE',
  SET_USER_NAME:'SET_USER_NAME',
  SET_FLOW:'SET_FLOW',
  SET_SHOWINTRO:"SET_SHOWINTRO"
}
const state ={
  scanHistory:[],
  taskId:0,
  processId:0,
  facilityState:"",
  userName:"",
  flowList:[],
  showIntro:false
}
const getters = {
  scanHistory:state=>state.scanHistory.slice(0,5),
  taskId :state=>state.taskId,
  processId:state=>state.processId,
  facilityState:state=>state.facilityState,
  userName:state=>state.userName,
  flowList:state=>state.flowList,
  showIntro:state=>state.showIntro
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
  },
  [type.SET_USER_NAME](state,name){
    localStorage.setItem("userName",name)
    state.userName = name;
  },
  [type.SET_FLOW](state,flow){
    state.flowList = flow;
  },
  [type.SET_SHOWINTRO](state,show){
    state.showIntro=show
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
  },
  setUserName:({commit},name)=>{
    commit(type.SET_USER_NAME,name)
  },
  getTaskList:({commit})=>{
    return getTask()
  },
  getFlowList:({commit})=>{
     getFlow().then(r=>{
      commit(type.SET_FLOW,r.data.list)
     })
  },
  setShowIntro:({commit},show)=>{
    commit(type.SET_SHOWINTRO,show)
  }
}

export default new Vuex.Store({
  state,getters,mutations,actions
})
