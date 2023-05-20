import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

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
          fetch(" http://localhost:4040/admins/" + id).then((res) => {
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
                      navigate('/intro')
                  }else{
                      toast.error('Please Enter valid credentials');
                  }
              }
          }).catch((err) => {
              toast.error('Login Failed due to :' + err.message);
          });
      }
  }

//   const ProceedLoginusingAPI = (e) => {
//     e.preventDefault();
//     if (validate()) {
//         ///implentation
//         // console.log('proceed');
//         let inputobj={"email": id,
//         "password": password};
//         fetch("https://localhost:4040/users/Authenticate",{
//             method:'POST',
//             headers:{'content-type':'application/json'},
//             body:JSON.stringify(inputobj)
//         }).then((res) => {
//             return res.json();
//         }).then((resp) => {
//             console.log(resp)
//             if (Object.keys(resp).length === 0) {
//                 toast.error('Login failed, invalid credentials');
//             }else{
//                  toast.success('Success');
//                  sessionStorage.setItem('email',id);
//                  sessionStorage.setItem('jwttoken',resp.jwtToken);
//               //  useNavigate('/')
//             }
//             // if (Object.keys(resp).length === 0) {
//             //     toast.error('Please Enter valid username');
//             // } else {
//             //     if (resp.password === password) {
//             //         toast.success('Success');
//             //         sessionStorage.setItem('username',username);
//             //         usenavigate('/')
//             //     }else{
//             //         toast.error('Please Enter valid credentials');
//             //     }
//             // }
//         }).catch((err) => {
//             toast.error('Login Failed due to :' + err.message);
//         });
//     }
// }
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
  return (
    
    <div>
      
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={ProceedLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Admin Sign In</h3>
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
              Submit
            </button>
            <ToastContainer />
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/forgot">password?</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default LoginPage
