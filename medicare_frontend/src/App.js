import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Intro from './components/Intro';
import LoginPage from './components/LoginPage';
import About from './components/About';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import UserLogin from './components/UserLogin';
import WelcomePage  from './components/WelcomePage';
import Userhome from './components/Userhome';
import Payment from './components/Payment';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <UserNavbar/> */}
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/intro' element={<Intro />}></Route>
        <Route path='/userintro' element={<WelcomePage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/userhome' element={<Userhome />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/home/editProduct/:id' element={<EditProduct />}></Route>
        <Route path='/adminlogin' element={<LoginPage />}></Route>
        <Route path='/userlogin' element={<UserLogin />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
      </Routes>

    </>

  );
}

export default App;
