import axios from 'axios'

export const getTask =()=>{
  return new Promise((resolve,reject)=>{
    axios.get("@/data/task.json").then(response=>{
        resolve(response)
    }).catch(error=>{
        reject(error)
    })
  })
    
}