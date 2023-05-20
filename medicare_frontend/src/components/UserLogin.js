import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const UserLogin = () => {

    const navigate = useNavigate();

    const [id, setid] = useState("");
    const [password,setPassword] = useState("");

    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "id"){
          setid(value);
          console.log(id);
      }
      if(id === "password"){
          setPassword(value);
      }
  }
    const ProceedLogin = (e) => {
      e.preventDefault();
      if (validate()) {
          ///implentation
          // console.log('proceed');
          fetch(" http://localhost:4040/users/" + id).then((res) => {
              return res.json();
          }).then((resp) => {
              console.log(resp)
              if (Object.keys(resp).length === 0) {
                  toast.error('Please Enter valid username');
              } else {
                  if (resp.password === password) {
                      toast.success('Success');
                      sessionStorage.setItem('username',id);
                      sessionStorage.setItem('userrole',resp.password);
                      navigate('/userintro')
                  }else{
                      toast.error('Please Enter valid credentials');
                  }
              }
          }).catch((err) => {
              toast.error('Login Failed due to :' + err.message);
          });
      }
  }

    const validate = () => {
        let result = true;
        if (id === '' || id === null) {
            result = false;
            toast.warning('Please Enter Email');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    const navigateSignup=()=>{
      // e.preventDefault;
      navigate('/signup')
    }
  return (
    <div>
      <div>
      
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={ProceedLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="id"
              className="form-control mt-1"
              placeholder="Enter email"
              value={id} onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password} onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <ToastContainer />
          </div>
          <p className="forgot-password text-right mt-3 mx-3">
            Forgot <a href="/forgot">password?</a>
            <button onClick={navigateSignup} className="btn btn-primary mx-3">
              Register Now
            </button>
          </p>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default UserLogin
