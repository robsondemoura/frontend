import { Card } from "react-bootstrap"


export default function Content(props){
    return(
            <Card.Body>
                    {props.children}
            </Card.Body>
    )
}