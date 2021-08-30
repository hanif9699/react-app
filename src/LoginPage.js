import React from 'react'
import LoginForm from './components/LoginForm'
import { useDispatch } from 'react-redux';
import * as types from './constants/actionTypes';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [values,setValues]=React.useState({email:'',password:'',showPassword:false});
    const changeHandler=(name)=>(event)=>{
        setValues({...values,[name]:event.target.value});
    }
    const onSubmit =(event)=>{
        event.preventDefault()
        dispatch({type:types.LOGIN__REQUESTED,payload:{email:values.email,password:values.password}})
    }
    const togglePassword=()=>{
        setValues({...values,showPassword:!values.showPassword})
    }
    return (
        <div>
            Login Page
            <LoginForm values={values} onChange={changeHandler} onSubmit={onSubmit} togglePassword={togglePassword}/>
        </div>
    )
}

export default LoginPage
