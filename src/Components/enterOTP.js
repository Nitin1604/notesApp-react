import NavigationComponent from "./Navigation";
import React from 'react';
import otpLogo from './otpLogo.jpg';
import { Helmet } from 'react-helmet';

const Title = 'OTP Login';
const OtpComponent = () => {

    return (
        <>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            <div id="OtpComponent">
                <NavigationComponent />
                <img src={otpLogo}
                className="my-2" alt="Image not found" width="200" height="200"></img>

                <div className="content" >

                    {/* div tag having form class */}
                    <div className="form class">

                        <section id="otpLogin">
                            <h1 className="text-primary">Enter the OTP received</h1>
                            <div id="otpLogin-box">

                                <form action="" >

                                    {/* form-group for "OTP Login" */}
                                    <div className="form-group">
                                        <b><label htmlFor="Name" className="mx-3 text-primary">OTP</label></b>
                                        <input id="name" name="name" className="col-sm-6 text-primary inputOTP " placeholder="Enter your OTP"/>
                                    </div>
                                    {/* form-group for "OTP Login" */}

                                    {/* container class for "Login" button */}
                                    <div className="container" style={{ paddingLeft: '100px' }}>
                                        <button className="btn btn-primary" id="loginID" style={{ borderRadius: '16px', width: '134px', }}>Verify OTP</button>
                                    </div>
                                    {/* container class for "Login" button */}

                                </form>
                            </div>
                        </section>
                    </div>
                    {/* div tag having form class */}


                </div>
            </div>

        </>

    )
};
export default OtpComponent;