import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AuthUser() {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;      
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString);
        return user;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }

    const logout = () => { 
        sessionStorage.clear();
        navigate('/login');
     }

    const http = axios.create({
        baseURL: "http://127.0.0.1:8000/api",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return {
        setToken: saveToken,
        getToken,
        getUser,
        http,
        token,
        user,
        logout
    }
}
