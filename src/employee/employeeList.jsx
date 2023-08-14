import fontAwesome from "../common/layout/font-awesome"

import { useEffect } from "react"

import { Table } from "react-bootstrap"
import {Button} from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"

import { getList, showDel, showUpdate, showTool } from "../store/actions/actions"
import If from "../common/operator/If"

export default function EmployeeList(props){

    const list = useSelector(state=> state.employee.list)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getList())
    },[])

    function showUp(employee){
        dispatch(showUpdate(employee))
    }

    function showD(employee){
        dispatch(showDel(employee))
    }
    function showT(employee){
        dispatch(showTool(employee))
    }

        function renderRows(){
            const lista = list || []
            return lista.map(emp=>(
                <tr key={emp._id}>
                    <td>{emp.name}</td>
                    <td>{emp.function}</td>
                    <td>
                        <If test={props.employee}>
                            <Button variant="warning" onClick={()=>showUp(emp)}><i className="fa fa-pencil"/></Button>
                            <Button variant="danger" onClick={()=>showD(emp)}><i className="fa fa-trash"/></Button>
                        </If>
                        <If test={props.tool}>
                            <Button variant="secondary" onClick={()=>showT(emp)}><i className="fa fa-wrench"></i> Gerenciamento de Ferramentas</Button>
                        </If>
                    </td>
                </tr>
            ))
        }
    return(
        <Table responsive>
            <thead>
                <tr>
                    <th>Funcionário</th>
                    <th>Função</th>
                    <th className="table-actions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table>
    )
}