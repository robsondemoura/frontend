import Content from "../common/templates/content";
import ContentHeader from "../common/templates/contentHeader";
import AllTabs from "../common/tab/allTabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import TabsContent from "../common/tab/tabsContent";
import TabContent from "../common/tab/tabContent";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import {create, update, del, init } from "../store/actions/actions";

import EmployeeList from "./employeeList";
import EmployeeForm from "./employeeForm";


export default function Employee(props){

const dispatch = useDispatch()
   
useEffect(()=>{
    dispatch(init())
},[])
    function handleSubmit(values){
        dispatch(create(values))
    }

  function handleUpdate(values){
        dispatch(update(values))
    }

    function handleDel(values){
        dispatch(del(values))
    }

    return(
        <div>
          
                <ContentHeader title="Cadastro de Funcionários"/>
                <Content>
                   <AllTabs>
                    <TabsHeader>
                        <TabHeader label="Listar" target="tabList" icon="list"/>
                        <TabHeader label="Incluir" target="tabCreate" icon="plus"/>
                        <TabHeader label="Alterar" target="tabUpdate" icon="pencil"/>
                        <TabHeader label="Deletar" target="tabDelete" icon="trash"/>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <EmployeeList employee={true}/>
                        </TabContent>

                        <TabContent id="tabCreate">
                            <EmployeeForm onSubmit={handleSubmit} submitLabel="Incluir" submitVariant="success"/>
                        </TabContent>

                        <TabContent id="tabUpdate">
                            <EmployeeForm onSubmit={handleUpdate} submitLabel="Aletarar" submitVariant="info"/>
                        </TabContent>

                        <TabContent id="tabDelete">
                            <EmployeeForm onSubmit={handleDel} submitLabel="Excluir" submitVariant="info" readOnly/>
                        </TabContent>
                    </TabsContent>
                   </AllTabs>
                </Content>
        </div>
    )
}
  