import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import {useStateValue} from './StateProvider';
import { actionTypes } from './reducer';
function Login() {
    const [{},dispatch] = useStateValue();
  const signIn =()=>{
auth.signInWithPopup(provider).then((result)=>{
    dispatch({
        type:actionTypes.SET_USER,
        user: result.user,
    });
})
.catch((error)=> alert(error.message));
  };
    return (
        <div className="login">
            <div className="container">
                <img className="imagesss" src="http://shilpaagarg.com/wp-content/uploads/2013/12/whatsapp-logo.jpg" alt="logo" />
                <div className="login_text">
                    <h1>Sign In To Whatsapp</h1>
                </div>
                <Button  type="submit" onClick={signIn}>
                   SIGN IN WITH GOOGLE
                </Button>
            </div>
        </div>
    )
}

export default Login
