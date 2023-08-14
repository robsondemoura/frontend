import { Tabs } from "react-bootstrap";
import If from "../operator/If";


export default function AllTabs(props){

    return(
        <div className="nav-tabs-custom">
            {props.children}
        </div>
    )
}