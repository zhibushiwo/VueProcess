import Vue from 'vue'
import Vuex from 'vuex'
import {getTask,getFlow} from '@/api/getData'
import {Message } from 'element-ui'

Vue.use(Vuex)

const task = {
  "tableData": [
      {
          "number": "GS270",
          "name": "钢丝270",
          "model": "301",
          "billno": "SHN5",
          "qty": 299,
          "finish": 89,
          "id": 1
      },
      {
          "number": "GS270",
          "name": "钢丝270",
          "model": "301",
          "billno": "SH0000165",
          "qty": 199,
          "finish": 99,
          "id": 2
      },
      {
          "number": "GS270",
          "name": "钢丝270",
          "model": "301",
          "billno": "SH000165",
          "qty": 939,
          "finish": 399,
          "id": 3
      },
      {
          "number": "GS270",
          "name": "钢丝270",
          "model": "301",
          "billno": "SHN1905210",
          "qty": 10,
          "finish": 8,
          "id": 4
      },
      {
          "number": "GS270",
          "name": "钢丝270",
          "model": "301",
          "billno": "SH19052165",
          "qty": 99,
          "finish": 12,
          "id": 5
      },
      {
          "number": "GS270",
          "name": "钢丝270",
          "model": "301",
          "billno": "SHN1900165",
          "qty": 89,
          "finish": 0,
          "id": 6
      },
      {
          "number": "GS270",
          "name": "钢丝270",
          "model": "301",
          "billno": "SHN19055",
          "qty": 999,
          "finish": 0,
          "id": 7
      }
  ]
}

const flow = {
  "list": [
      {
        "name": "第一道工序",
        "id": 10
      },
      {
        "name": "第二道工序",
        "id": 20
      },
      {
        "name": "第三道工序",
        "id": 30
      },
      {
        "name": "第四道工序",
        "id": 40
      },
      {
        "name": "第五道工序",
        "id": 50
      },
      {
        "name": "第六道工序",
        "id": 60
      },
      {
        "name": "第七道工序",
        "id": 70
      },
      {
        "name": "第八道工序",
        "id": 80
      },
      {
        "name": "第九道工序",
        "id": 90
      },
      {
        "name": "第十道工序",
        "id": 100
      }
    ]
  }

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
    return getTask().catch(err=>{
      Message.error(err.toString())
      return task
    })
  },
  getFlowList:({commit})=>{
     getFlow().then(r=>{
      commit(type.SET_FLOW,r.list)
     }).catch(err=>{
      Message.error(err.toString())
      console.log(flow)
      commit(type.SET_FLOW,flow.list)
    })
  },
  setShowIntro:({commit},show)=>{
    commit(type.SET_SHOWINTRO,show)
  }
}

export default new Vuex.Store({
  state,getters,mutations,actions
})
