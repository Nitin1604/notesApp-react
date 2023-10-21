import NavigationComponent from "./Navigation";
import React from 'react';
import contactLogo from './contactLogo.jpg';
import { Helmet } from 'react-helmet';

const Title = 'Login Page';
const LoginComponent = () => {

    return (
        <>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            {/* div having id LoginComponent */}
            <div id="LoginComponent">
                <NavigationComponent />

                <img src={contactLogo}
                    className="my-2" alt="Image not found" width="200" height="200"></img>
                {/* container class */}
                <div className="container my-4">

                    {/* div tag having form class */}
                    <div className="form class">


                        <section id="contact">
                            <h1 className="h-primary center text-success">Login with your number</h1>
                            <div id="contact-box">
                                <form action="">

                                    {/* form-group for "Name" */}
                                    <div className="form-group">
                                        <b><label htmlFor="name" className="text-success">Name: </label></b>
                                        <input type="text" name="name" id="name" placeholder="Enter your name" className="text-success" />
                                    </div>
                                    {/* form-group for "Name" */}

                                    {/* form-group for "Email"  */}
                                    <div className="form-group">
                                        <b><label htmlFor="email" className="text-success">Email: </label></b>
                                        <input type="email" name="name" id="email" placeholder="Enter your email" className="text-success" />
                                    </div>
                                    {/* form-group for "Email"  */}

                                    {/* form-group for "Phone Number" */}
                                    <div className="form-group">
                                        <b><label htmlFor="phone" className="text-success">Phone Number: </label></b>
                                        <input type="phone" name="name" id="phone" placeholder="Enter your phone" className="text-success" />
                                    </div>
                                    {/* form-group for "Phone Number" */}

                                    {/* container class for "Login" button */}
                                    <div className="container">
                                        <button className="btn btn-success" style={{ borderRadius: '16px', width: '416px', }}>Login</button>
                                    </div>
                                    {/* container class for "Login" button */}

                                </form>
                            </div>
                        </section>

                    </div>
                    {/* div tag having form class */}

                </div>
                {/* container class */}

            </div>
            {/* div having id LoginComponent */}

        </>

    )
}

export default LoginComponent;