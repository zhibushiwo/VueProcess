import axios from 'axios'

export const getTask =()=>{
  return new Promise((resolve,reject)=>{
    axios.get("../data/task.json").then(response=>{
        resolve(response.data)
    }).catch(error=>{
        console.log(error)
        reject(error)
    })
  })   
}

export const getFlow = ()=>{
  return new Promise((resolve,reject)=>{
    axios.get("../data/flow.json").then(response=>{
        resolve(response.data)
    }).catch(error=>{
      console.log(error)
        reject(error)
    })
  }) 
}