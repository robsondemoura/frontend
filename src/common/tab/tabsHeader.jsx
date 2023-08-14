import "./customTabs.css"

export default function TabsHeader(props){
    return(
        <ul className="nav nav-tabs">
            {props.children}
        </ul>
    )
}