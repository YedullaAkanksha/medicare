import React from 'react'
import UserNavbar from './UserNavbar'


const Userintro = () => {
    const style = {
      "backgroundImage": `url("images/bgimg1.jpg")`,
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "cover",
      position: "absolute",
      height: "100%",
      width: "100%",
      text : "Welcome"
  }
  const header = {
      fontsize: "80px",
      color: "#363030",
      TextTrackList: "center"
  }
  return(
      <>
              <div style={style}> <h1 style={header}>Welcome to the Medicare. An online medicines seller</h1></div>
          <h1>Welcome to MediCare</h1>
      </>
  ) 

}




function IntroPage() {
    return (
    <div>
        <UserNavbar/>
        <Userintro />
    </div>
)}


export default IntroPage
