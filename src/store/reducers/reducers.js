import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import { combineReducers } from "@reduxjs/toolkit";

const INITIAL_STATE =  {selected:"", visible:{}}
const STATE_INITIAL =  {list:[], error:""}

function select(state= INITIAL_STATE, action){
    switch(action.type){
        case "TAB_SELECTED":
            return {...state, selected:action.payload}
        case "TAB_SHOWED":
            return {...state, visible:action.payload}  
        default: return{...state}
    }
}

function employee (state= STATE_INITIAL, action){
    switch(action.type){
        case "EMPLOYEE_FETCHED":
            return{...state, list: action.payload}
        case "EMPLOYEE_FETCH_ERROR":
            return{...state, error: action.payload}
        default: return{...state}
    }
}

// Reduce for Authenticate 
const userKey = '_toolflow_user'
const I_STATE = {user: JSON.parse(localStorage.getItem(userKey)), validToken: false}

function auth(state=I_STATE, action){
    switch(action.type){
        case "TOKEN_VALIDATED": 
        if(action.payload){
            return {...state, validToken:true}
        } else{
            localStorage.removeItem(userKey)
            return {...state,validToken:false, user: null}
        }
        case "USER_FETCHED": 
        localStorage.setItem(userKey, JSON.stringify(action.payload))
        return {...state, user: action.payload, validToken:true}
        default: return {...state}
    }
}

export default combineReducers({select, employee, form: formReducer, toastr: toastrReducer, auth})