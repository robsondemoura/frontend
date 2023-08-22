
import { DropdownButton } from "react-bootstrap"
import { Dropdown} from "react-bootstrap"
import MenuItem from "./menuItem"
export default function Navbar(props){
    return(
<nav className="navegation">
  <div>
        <DropdownButton title="Menu">
            <Dropdown.Item href='/'>
                <MenuItem  label="Cadastro de Funcionários"/>
            </Dropdown.Item>
            <Dropdown.Item href="/tools" >
                <MenuItem  label="Área de Visualização"/>
            </Dropdown.Item>
        </DropdownButton>
    </div>
</nav>
    )
}