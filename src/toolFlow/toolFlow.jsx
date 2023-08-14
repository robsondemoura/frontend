import Content from "../common/templates/content";
import ContentHeader from "../common/templates/contentHeader";
import AllTabs from "../common/tab/allTabs"
import TabsHeader from "../common/tab/tabsHeader"
import TabHeader from "../common/tab/tabHeader"
import TabsContent from "../common/tab/tabsContent";
import TabContent from "../common/tab/tabContent";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { initFlow } from "../store/actions/actions";
import { update } from "../store/actions/actions";

import EmployeeList from "../employee/employeeList";
import EmployeeForm from "../employee/employeeForm";



export default function ToolFlow(props){
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(initFlow())
    },[])

    function handleUpdate(values){
        dispatch(update(values))
    }

    return(
        <div>
            <ContentHeader title="Fluxo de Ferramentas"/>
            <Content>
                <AllTabs>
                    <TabsHeader>
                        <TabHeader label="Lista" target="tabList" icon="list"/>
                        <TabHeader label="Fluxo de Ferramentas" target="tabToolFlow" icon="wrench"/>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <EmployeeList tool={true}/>
                        </TabContent>
                        
                        <TabContent id="tabToolFlow">
                            <EmployeeForm onSubmit={handleUpdate} tool={true} readOnly={true} submitVariant="success" submitLabel="Concluir Gerenciamento"/>

                        </TabContent>
                    </TabsContent>
                </AllTabs>
            </Content>
        </div>
    )
}