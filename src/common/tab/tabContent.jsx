
import If from "../operator/If"
import { useSelector } from "react-redux"


export default function TabContent(props){

    const select = useSelector((state)=>state.select)
    const visible = useSelector((state)=> state.select.visible[props.id])

    const selected = select.selected === props.id
    return(
        <If test={visible}>
            <div id={props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                {props.children}
            </div>
        </If>
    )
}