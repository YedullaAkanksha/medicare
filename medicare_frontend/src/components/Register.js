import React from 'react'
import { useState } from 'react';
import './style.css'
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const navigate = useNavigate();
    const [id, idchange] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "id"){
            idchange(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const validate = () => {
        let result = true;
        if (id === '' || id === null) {
            result = false;
            toast.warning('Please Enter Email');
        }
        if (firstName === '' || firstName === null) {
            result = false;
            toast.warning('Please Enter firstName');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
      }

    const handleSubmit  = (e) => {
        let regobj={firstName,lastName,id,password,confirmPassword};
        console.log(firstName,lastName,id,password,confirmPassword);
        
            if(password===confirmPassword && validate()){
            fetch("http://localhost:4040/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/userlogin');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
            }else{
                toast.error('Passwords are not matched', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                console.log("Error");
            }
    }

    return(
        <div className="form" >
          <div style={{
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        textDecorationColor:'red',
        // height: '100vh',
      }}><h1 >Registration Form</h1></div>
          
            <div className="form-body">
            
                <div className="username">
                    
                    <label className="form__label mx-4" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label  mx-4" htmlFor="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label mx-4" htmlFor="email">Email </label>
                    <input  type="email" id="id" className="form__input" value={id} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label mx-4" htmlFor="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password ">
                    <label className="form__label  mx-4" htmlFor="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="footer">
                <button className="btn btn-info mx-2 my-2" onClick={()=>handleSubmit()} type="submit" >Register</button>
                <ToastContainer />
            </div>
        </div>
       
    )       
}

export default Register
