import If from "../operator/If";

export default function InputAuth(props){
     return (
        <If test={!props.hide}>
                <div className="form-group has-feedback">
                    
                 <input  {...props.input} className="form-control" placeholder={props.placeholder} readOnly={props.readOnly} type={props.type}/>
                    
                </div>
        </If>
     )
}