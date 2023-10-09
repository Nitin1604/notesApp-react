import { Route, BrowserRouter, Routes } from "react-router-dom"; // This is the way that how Router can be imported
// Import all web pages component here
import LoginComponent from "./login";
import HomeComponent from "./home";
import AboutComponent from "./About";
import ContactComponent from "./Contact";
import React from 'react';


const RouterConfig = () => {

    return (
        <div id="RouterConfig">
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={< LoginComponent />} />                 
                    <Route exact path='/home' element={< HomeComponent />} />      
                    <Route exact path='/about' element={< AboutComponent />} />      
                    <Route exact path='/contact' element={< ContactComponent />} />  

                </Routes>
            </BrowserRouter>
        </div>
     )
}

export default RouterConfig;