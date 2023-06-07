import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import AuthUser from '../components/AuthUser'

function Auth() {
    const { token, logout } = AuthUser();
    const userLogout = () => { 
        if (token !== undefined) {
            logout();
        }
     }

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Dishasun</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <span role='button' className="nav-link" onClick={userLogout} >Logout</span>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
}

export default Auth;
