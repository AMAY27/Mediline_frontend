import React, { useState } from 'react';
import axios from 'axios';

interface LoginProps  {
    email : String,
    password : String
}
const BACKEND_URL = import.meta.env.VITE_NODE_BACKEND_URL;

const Login = () => {
    const [userCredentials, setUserCredentials] = useState<LoginProps>({
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCredentials(prevCredentials => ({
            ...prevCredentials,
            [e.target.name]: e.target.value
        }));
    }
    const handleLogin = async (e:React.FormEvent) => {
        e.preventDefault();
        const config = {
            headers :{
                'Content-Type' : 'application/json'
            }
        };
        const body = JSON.stringify(userCredentials);
        try {
            const res = await axios.post(`${BACKEND_URL}/auth/login`,body,config)
            if(res.status === 200){
                
                console.log(res);
                localStorage.setItem("userId", res.data.userId)
                localStorage.setItem("access", res.data.token)
                //dispatch(load_user());
            }
        } catch (error) {
            console.log(error)
        }
    };
    

    return (
        <div>
            <h1>Login</h1>
            <input 
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Enter username"
            />
            <input
                type="password"
                name='password'
                onChange={handleChange}
                placeholder="Enter password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
