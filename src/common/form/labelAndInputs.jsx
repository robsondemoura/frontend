import Grid from "../layout/grid";
import { Form } from "react-bootstrap";

export default props=>{
    return(
        <Grid cols={props.cols}>
            <Form.Group>
                <Form.Label htmlFor={props.name}>
                    {props.label}
                </Form.Label>
                <Form.Control placeholder={props.placeholder} readOnly={props.readOnly} {...props.input} type={props.type}/>
            </Form.Group>
           
        </Grid>
    )
}