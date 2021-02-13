import React, { useState } from 'react'
import Fetch from '../../../Additional/Fetch';

const Login = () => {
    
    const [data,setData] = useState({
        username : "",
        password : ""
    })
    const [token,setToken] = useState('');
    const changeInput= e => {
        
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }
    const submit = e => {
        e.preventDefault();
        let url = `${process.env.REACT_APP_NODESERVER}/api/login`;
        Fetch({
            url : url,
            method : "POST",
            headers : {
                'Content-type' : "application/json"
            },
            body : JSON.stringify(data)
        }).then(response => {
            setToken(response.token);
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name="username" onChange={changeInput} value={data.username}/>
                <input type="password" name="password" onChange={changeInput} value={data.password}/>
                <button>SUBMIT</button>
            </form>
            <h1>token : {token}</h1>
        </div>
    )
}

export default Login
