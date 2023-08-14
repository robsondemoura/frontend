import axios from "axios"
import { toastr } from "react-redux-toastr"
import { initialize } from "redux-form"
import consts from "../../main/consts"

const BASE_URL = "https://tool-flow-backend.onrender.com/api"

const INITIAL_VALUES = {tool:[{}]}

export function selecTab(tabId){
    return{
        type:"TAB_SELECTED",
        payload: tabId
    }
}

export function showTabs(...tabsId){
    const tabsToShow = {}
    tabsId.forEach(e=>tabsToShow[e] = true)
    return{
        type:"TAB_SHOWED",
        payload: tabsToShow
    }
}

export function showUpdate(employee){
    return dispatch=>dispatch(showTabs('tabUpdate'),
    dispatch(selecTab('tabUpdate')),
    dispatch(initialize('employeeForm', employee)))
}

export function showDel(employee){
    return dispatch => dispatch(showTabs('tabDelete'),
    dispatch(selecTab('tabDelete')),
    dispatch(initialize('employeeForm', employee)))
}

export function showTool(employee){
    return dispatch=> dispatch(showTabs('tabToolFlow'),
    dispatch(selecTab('tabToolFlow')),
    dispatch(initialize('employeeForm', employee)))
}
export function create(values){
    return submit(values,'post')
   
}

export function update(values){
    return submit(values,'put')
}

export function del(values){
    return submit(values,'delete')
}

function submit(values,method){

    return dispatch => {
      const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/tools/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso','A operação foi realizada com sucesso')
            dispatch(init())
          })
          .catch(e => {
            e.response.data.errors.forEach(erro => toastr.error('Erro', erro))
          })
      }
  
  }

export function init(){
    return dispatch => dispatch(showTabs('tabList', 'tabCreate'),
    dispatch(selecTab('tabList')),
    dispatch(getList()),
    dispatch(initialize('employeeForm')))
}
export function initFlow(){
    return dispatch=> dispatch(showTabs('tabList'),
    dispatch(selecTab('tabList')),
    dispatch(getList()),
    dispatch(initialize('employeeForm'),INITIAL_VALUES))}



export function getList(){
    return async (dispatch)=>{
        try{
           const request = await axios.get(`${BASE_URL}/tools`)
           const data = await request.data
           dispatch({type:"EMPLOYEE_FETCHED", payload: data})
        } catch (error){
            dispatch({type:"EMPLOYEE_FETCH_ERROR", payload: error})
        }
    }
}

// ----- Action for Authenticate

export function send(values,url){
    return dispatch =>{
        axios.post(url,values).then(resp=>{
            dispatch({type:'USER_FETCHED', payload:resp.data})
        }).catch(e=>{
            if(e.response && e.response.data && e.response.data.errors){
                e.response.data.errors.forEach(error=>toastr.error('Erro', error))
            }
        })
    }
}

export function login(values){
    return send(values,`${consts.OAPI_URL}/login`)
}

export function signup(values){
    return send(values,`${consts.OAPI_URL}/signup`)
}

export function logout(){
    return {type:'TOKEN_VALIDATED', payload: false}
}

export function validateToken(token){
    return dispatch=>{
        if(token){
            axios.post(`${consts.OAPI_URL}/validateToken`, {token}).then(resp=>{dispatch({type:'TOKEN_VALIDATED', payload: resp.data.valid})})
            .catch(e=>dispatch({type:'TOKEN_VALIDATED', payload: false}))
        } else{
            dispatch({type:'TOKEN_VALIDATED', payload: false})
        }
    }
}