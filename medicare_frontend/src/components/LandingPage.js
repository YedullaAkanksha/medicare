import React from 'react'
import {useNavigate} from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    const navigateLogin=()=>{
        console.log("Login Page");
        navigate('/adminlogin');
    }

    const navigateAdminLogin=()=>{
        console.log("Signup Page");
        navigate('/userlogin');
    }

    const style = {
      display: "inline-grid",
      paddingTop: "16rem",
      paddingLeft: "5rem",
  
  }
  const style1 = {
    "backgroundImage": `url("images/imgbg4.jpg")`,
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
}

const textstyle = {
  color: "red",
  paddingLeft: "4rem",
  paddingTop: "4rem",
    fontSize: "4rem",
    fontStyle: "italic"
}
const textstyle2 = {
  color: "white",
  paddingLeft: "4rem",
  paddingTop: "1rem"
}

  return (
    <div style={style1}> 
    <div style={textstyle}>
      <h1>Welcome to Medicare</h1>
    </div>
    <div style={textstyle2}>
      <h5>An Online Medical Pharmacy</h5>
      {/* <p>“Time and health are two precious assets that we don't recognize and appreciate until they have been depleted.”</p> */}
    </div>
    <div style={style}>
    
      <button type="button" className="btn btn-primary mx-2 my-2" onClick={navigateLogin}>AdminLogin</button>
      <button type="button" className="btn btn-dark mx-2 my-2" onClick={navigateAdminLogin}>User Login</button>
    </div>
    </div>
  )
}

export default LandingPage
