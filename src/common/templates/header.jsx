import { Figure, NavDropdown } from "react-bootstrap";
import "./custom.css"
import Navbar from "./navbar";
import { useState } from "react";
import imagem from "../images/profile_icon_free.png"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/actions";

export default function Header(props){
    const auth = useSelector((state)=>state.auth.user)
    const {name} = auth
    const dispatch= useDispatch()
    

    function logOut(){
        dispatch(logout())
    }
    return(
        <div className="gradientNavBar">
            <header >
                <h3>Tool Flow</h3>
                <Navbar/>
           
            </header>
             <div>
                <NavDropdown title={<Figure.Image width={30} height={30}  src={imagem}/>}>
                    <section className="perfil">
                        <p>Olá, <strong>{name}</strong></p>
                    </section>
                    <NavDropdown.Item onClick={logOut}>Sair</NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
        
    )
}