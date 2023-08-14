
import App from "./App"
import Auth from "../auth/auth"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { validateToken } from "../store/actions/actions"
import axios from "axios"

function AuthOrApp(props) {
    const { user, validToken } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [hasAuthenticated, setHasAuthenticated] = useState(false);
  
    useEffect(() => {
      if (user && user.token) {
        dispatch(validateToken(user.token));
      }
    }, [dispatch, user?.token]);
   
    if (user && validToken) {
      axios.defaults.headers.common['authorization'] = user.token
      return <App/>;

    } else if(!user && !validToken){

      return <Auth />;

    } else{
      return false
    }
  
    
  }
export default AuthOrApp

