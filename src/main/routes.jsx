import { BrowserRouter,Routes, Route } from "react-router-dom";

import Employee from "../employee/employee";
import ToolFlow from "../toolFlow/toolFlow";

export default (props)=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Employee/>} path="/employees"/>
                <Route element={<ToolFlow/>} path="/"/>
            </Routes>
        </BrowserRouter>
    )
}