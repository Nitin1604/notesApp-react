import NavigationComponent from "./Navigation";
import React from 'react';


const LoginComponent = () => {


    return (
        <>
           {/* div having id LoginComponent */}
            <div id="LoginComponent">
                
                <NavigationComponent />
                {/* container class */}
                <div className="container my-4">

                    {/* div tag having form class */}
                    <div className="form class">

                        <h2>Get your OTP</h2>
                        
                        <form>

                            {/* This div tag having class row containg Contact Number and their input field */}
                            <div className="row my-3">

                                {/* Contact Number */}
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1">Contact Number</label>
                                </div>
                                {/* Contact Number */}

                                {/* Contact Number input field */}
                                <div className="col-6">
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter your contact number" />
                                </div>
                                {/* Contact Number input field */}

                            </div>
                            {/* This div tag having class row containing Contact Number and their input field */}

                            {/* form-group containing Password, its input field and login button */}
                            <div className="form-group">

                                {/* Login button */}
                                <div className="my-2">
                                    <button type="login" className="btn btn-danger col-sm-3 my-2 mx-1">Send OTP</button>
                                </div>
                                {/* Login button */}

                            </div>
                             {/* form-group containing Password, its input field and login button */}

                        </form>
                        
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