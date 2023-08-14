import './employee.css'

import { useDispatch, useSelector } from "react-redux"
import { reduxForm, Field, formValueSelector } from "redux-form"

import { Button } from "react-bootstrap"

import If from "../common/operator/If"
import ItemList from "../common/templates/itemList"
import labelAndInput from "../common/form/labelAndInputs"
import { init } from "../store/actions/actions"


function EmployeeForm(props){
    
    const dispatch = useDispatch()

    const selector = formValueSelector('employeeForm')

    const {handleSubmit, readOnly} = props

    function start(){
        dispatch(init())
    }

    const stateFormOfFlux = useSelector(state=>{
        return {
            tool: selector(state,'tool')
        }
    })


    return(
        <form role="form" onSubmit={handleSubmit}>
            <div className="card-body responsive">
                <Field name="name"  component={labelAndInput}  label="Nome do Funcionário" cols="12 4" placeholder="Informe o nome do funcionário" readOnly={readOnly}/>
                <Field name="function"  component={labelAndInput} label="Função do Funcionário" cols="12 4" placeholder="Informe a função do funcionário" readOnly={readOnly}/>
               
                
            </div> 
            <div className="card-body responsive">
                    <If test={props.tool}>
                        <ItemList cols="12 8" legend="Ferramentas" list={stateFormOfFlux.tool} readOnly={true} />
                    </If>
                </div>
            <div className="card-footer">
                    <Button variant={props.submitVariant} type="submit">{props.submitLabel}</Button>
                    <Button variant="danger" type="button" onClick={start}>Cancelar</Button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'employeeForm',destroyOnUnmount:false})(EmployeeForm)