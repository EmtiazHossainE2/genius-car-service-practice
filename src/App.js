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
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Footer from './Pages/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

const App = () => {
    return (
        <div >
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default App;