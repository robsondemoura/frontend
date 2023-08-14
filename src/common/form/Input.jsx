
export default function Input(props){
    return(
        <input {...props.input} className="form-control" placeholder={props.placeholder} readOnly={props.readOnly} type={props.type}/>
    )
}