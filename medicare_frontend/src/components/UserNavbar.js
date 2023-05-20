import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

const UserNavbar = () => {
    const navigate = useNavigate();

    const navigateLogout=()=>{
        
        navigate('/');
    }
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/userintro">Medi Care</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/userhome" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/about" className="nav-link active" aria-current="page">About</Link>
                            </li>
                           
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><button type="button" className="btn btn-info mx-2 my-2" onClick={navigateLogout}>Logout</button></li> 
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default UserNavbar
