import { Route, BrowserRouter, Routes } from "react-router-dom"; // This is the way that how Router can be imported
// Import all web pages component here
import LoginComponent from "./login";
import HomeComponent from "./home";
import AboutComponent from "./About";
import LockManager from "./lockScreen";
import React from 'react';


const RouterConfig = () => {

    return (
        <div id="RouterConfig">
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={< LockManager />} />                 
                    <Route exact path='/login' element={< LoginComponent/>} />  
                    <Route exact path='/home' element={< HomeComponent />} />      
                    <Route exact path='/about' element={< AboutComponent />} />      
                </Routes>
            </BrowserRouter>
        </div>
     )
}

export default RouterConfig;