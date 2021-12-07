import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './login.module.css';
import { useDispatch , useSelector} from 'react-redux';
import { loginAdmin, clearError } from '../../actions';
import { useNavigate} from 'react-router';





function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginInfo = useSelector(state=>state.login);
    const errorInfo = useSelector(state=>state.error);

    console.log(errorInfo);

    console.log(loginInfo);
    

    const onLoginPressed = () => {
        dispatch(loginAdmin({username,password}));
        console.log(loginInfo);
        if(loginInfo.token !== "" && loginInfo.is_admin) 
        {
            dispatch(clearError());
            navigate('/dashboard');
        }
        


    }

    // useEffect(()=> {
    //     loginInfo.token == "";
    // },[])

    

    return (
        
        
        <div className={classes.login}>
            <div>
                <h2 className={classes.logo}><span>ve</span>[N]<span>ue</span></h2>
            </div>

            <input className={classes.input} type="text" placeholder="Username" onChange={(a) => setUsername(a.target.value)}></input>
            {errorInfo.name !== "" && <span className={classes.errorText}>{errorInfo.name}</span>}
            <input className={classes.input} type="password" placeholder="Password" onChange={(a) => setPassword(a.target.value)}></input>
            {errorInfo.password !=="" && <span className={classes.errorText}>{errorInfo.password}</span>}
            {errorInfo.error !=="" && <span className={classes.errorText}>{errorInfo.error}</span>}
 

            <button className={classes.button} onClick={()=>onLoginPressed()}>Log In</button>
            <Link to="/register" ><button className={classes.buttonTwo}>Not an admin yet? Register here!</button></Link>
        </div>
        
            


      
    )
}

export default Login;

