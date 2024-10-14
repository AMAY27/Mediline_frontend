import React, { useState } from 'react'
import { DocLoginProps } from './registeration-types'
import axios from 'axios';
const Login = () => {
    const BACKEND_URL = import.meta.env.VITE_NODE_BACKEND_URL;
    const [docLoginCredentials, setDocLoginCredentials] = useState<DocLoginProps>({
        email : "",
        password : ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //e.preventDefault();
        setDocLoginCredentials(prevCredentials => ({
            ...prevCredentials,
            [e.target.name] : e.target.value
        }));
    }

    const handleLogin = async(e:React.FormEvent) => {
        e.preventDefault();
        const config = {
            headers :{
                'Content-Type' : 'application/json'
            }
        };
        const body = JSON.stringify(docLoginCredentials);
        try {
            const res = await axios.post(`${BACKEND_URL}/doc/login`,body,config)
            if(res.status === 200){
                
                console.log(res);
                localStorage.setItem("userId", res.data.userId)
                localStorage.setItem("access", res.data.token)
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <input 
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter email"
        />
        <input
            type="password"
            name='password'
            onChange={handleInputChange}
            placeholder="Enter password"
        />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login