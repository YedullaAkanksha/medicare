import React from 'react'
import Navbar from './Navbar';

// import App from '../App'

const Intro = () => {
    const style = {
        "backgroundImage": `url("images/bgimg2.jpg")`,
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
        <div style={style}> <h1 style={header}>Welcome to the Medicare. An online medicines seller authorised by admin</h1></div>
    ) 
}
    function HomePage() {
        return <div>
            <Navbar/>
            <Intro />
        </div>
    }


export default HomePage
