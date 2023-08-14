import "./customTabs.css"
import fontAwesome from "../layout/font-awesome"

import { useDispatch, useSelector } from "react-redux"

import If from "../operator/If"
import { selecTab } from "../../store/actions/actions"


export default function TabHeader(props){

    const dispatch = useDispatch()

    const tab = useSelector((state)=>state.select)
    const visible = useSelector((state)=> state.select.visible[props.target])

    const selected = tab.selected === props.target
    
    return(
        <If test={visible}>
        <li className={selected ? 'active' : ''}>
            <a data-toggle="tab" onClick={()=> dispatch(selecTab(props.target))} data-target={props.target}>
                <i className={`fa fa-${props.icon}`}/> {props.label}           
            </a> 
        </li>
        </If>
    )
}