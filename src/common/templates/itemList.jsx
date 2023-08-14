import { Button, Table } from "react-bootstrap"
import { useDispatch } from "react-redux"

import { Field, arrayInsert, arrayUnshift, arrayRemove } from "redux-form"
import Input from "../form/Input"
import FontAwesome from "../layout/font-awesome"



export default function ItemList(props){
    const dispatch = useDispatch()
    
    function add(){
            dispatch(arrayUnshift('employeeForm','tool'))     
    }

    function clone(index,item={}){
        dispatch(arrayInsert('employeeForm','tool',index,item))
    }
    
    function remove(index){
            dispatch(arrayRemove('employeeForm', 'tool', index)) 
    }

    function renderRows(){

        const list = props.list || []
        
        if (list.length === 0) {
            // Renderizar uma linha vazia quando o array está vazio
            return (
                <tr>
                <td><Field name={`tool[0].name`} component={Input} cols="12 4" placeholder="Informe a ferramenta" /></td>
                <td><Field name={`tool[0].day`} component={Input}  cols="12 4" placeholder="Informe o dia da solicitiação" type="number"/></td>
                <td><Field name={`tool[0].month`} component={Input} cols="12 4" placeholder="Informe o mês da solicitiação" type="number"/></td>
                <td>
                    <Button variant="success" onClick={add}>
                        <i className="fa fa-plus"/>
                    </Button>
                </td>
            </tr>
        )
        }
        
        return list.map((item,index)=>(

            <tr key={index}>
                <td><Field name={`tool[${index}].name`} component={Input}  placeholder="Informe a ferramenta" /></td>
                <td><Field name={`tool[${index}].day`} component={Input} placeholder="Informe o dia da solicitiação"  type="number"/></td>
                <td><Field name={`tool[${index}].month`} component={Input} placeholder="Informe o mês da solicitiação"  type="number"/></td>
                <td> {index === 0 && (
                    <Button variant="success" onClick={add}>
                        <i className="fa fa-plus"/> Adicionar
                    </Button>
                )}
                    {index>=1 &&(
                        <Button variant="warning" onClick={()=>clone(index+1,item)}> <i className="fa fa-clone"/></Button> 
                        
                    )}{
                     index>=1 &&(
                        <Button variant="danger" onClick={()=>remove(index)}> <i className="fa fa-trash"/></Button>
                     )
                    }
                </td>
            </tr>
        ))
    }

    return(
        
            <fieldset>
                <legend>{props.legend}</legend>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Ferramenta</th>
                            <th>Dia</th>
                            <th>Mês</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                         {renderRows()}
                    </tbody>
                </Table>
                
            </fieldset>
        
    )
}