import React, { useState } from 'react'
import AuthUser from './AuthUser'
export default function Login() {
    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () => {
        http.post('auth/login', {email, password})
        .then((res) => {
            setToken(res.data.user, res.data.access_token)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className='row justify-content-center pt-5'>
            <div className="col-md-6">
                <div className="card p-3" style={{ width: "100%" }}>
                    <h3 className='text-center'>Login</h3>
                    <form action="/action_page.php">
                        <div className="form-group my-3">
                            <label>Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" 
                            onChange={e=>setEmail(e.target.value)}
                            id="email" />
                        </div>
                        <div className="form-group my-3">
                            <label>Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" 
                            onChange={e=>setPassword(e.target.value)}
                            id="pwd" />
                        </div>
                        <button type="button" onClick={submitForm} className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
