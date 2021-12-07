import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './register.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import {addAdmin} from "../../actions/index";

function Register() {



    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [retypePassword,setRetypePassword] = useState("");

    const registerData = {username,email,password,retypePassword};
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerUser = () => {
        dispatch(addAdmin(registerData));
        setTimeout(()=>{
            navigate('/');
        },1000)
    }
    

    return (
        <div className={classes.register}>
            <div>
                <h2 className={classes.logo}>Registration</h2>
            </div>
            <input className={classes.input} type="text" placeholder="Username" onChange={(a) => setUsername(a.target.value) }></input>
            <input className={classes.input} type="text" placeholder="Email" onChange={(a) => setEmail(a.target.value) }></input>
            <input className={classes.input} type="password" placeholder="Password" onChange={(a) => setPassword(a.target.value) }></input>
            <input className={classes.input} type="password" placeholder="Re-type Password" onChange={(a) => setRetypePassword(a.target.value) }></input>

            <button className={classes.button} onClick={()=>registerUser()}>Complete Registration</button>
        </div>
    )
}

export default Register;
