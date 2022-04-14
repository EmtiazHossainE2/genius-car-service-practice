import React from 'react';
import './App.css'

// npm 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

//components 
import Header from './components/Header/Header';
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import Signup from './Pages/Account/Signup/Signup';
import Login from './Pages/Account/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './Pages/ServiceDetail/ServiceDetails';
import { Toaster } from 'react-hot-toast';
import Profile from './Pages/Account/Profile/Profile';
import RequireAuth from './Pages/Account/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';

const App = () => {
    return (
        <div >
            <Toaster></Toaster>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/services/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path="/checkout" element={
                    <RequireAuth>
                        <CheckOut></CheckOut>
                    </RequireAuth>
                }></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default App;