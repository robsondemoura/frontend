import "./auth.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login, signup } from "../store/actions/actions"
import { Button, Card } from "react-bootstrap"
import { Field, reduxForm } from "redux-form"
import InputAuth from "../common/form/inputAuth"

import Grid from "../common/layout/grid"
import Messages from "../common/msg/messages"


 function Auth(props){

    const {handleSubmit} = props

    const [state, setState] = useState({loginMode:true})
    const loginMode = state.loginMode
    const dispatch = useDispatch()


    function changeMode(){
        setState({loginMode: !state.loginMode})
    }

    function onSubmit(values){
        state.loginMode ? dispatch(login(values)) : dispatch(signup(values))
    }

    return(

        <div className="position">
            <Card>
                <div className="login-logo">
                        <b>Tool Flow</b>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Bem vindo!</p>
                    <form onSubmit={handleSubmit(v=>onSubmit(v))}>
                        <Field component={InputAuth} type="input" name="name" placeholder="Nome"  hide={loginMode}/>
                        <Field component={InputAuth} type="email" name="email" placeholder="E-mail" />
                        <Field component={InputAuth} type="password" name="password" placeholder="Senha" />
                        <Field component={InputAuth} type="password" name="confirm_password" placeholder="Confirmar Senha" hide={loginMode}/>
                        <Grid cols='4'>
                                <Button type="submit" variant="primary">
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </Button>
                        </Grid>
                    </form>
                    <br />
                    <a onClick={()=>changeMode()}>{loginMode ? 'Novo usuário? Resgistre-se aqui!' : 'Já é cadastrado? Entrar aqui!'}</a>
                </div>
                <Messages/>
            </Card>
        </div>
        
    )
}

export default reduxForm({form: 'authForm'})(Auth)