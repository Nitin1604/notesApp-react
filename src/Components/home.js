import NavigationComponent from "./Navigation";
import React from 'react';
import { Helmet } from 'react-helmet';

const Title = 'Getting OTP';

const HomeComponent = () => {
   
    return (
        <>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            <div id="HomeComponent">
                <NavigationComponent />

                <div className="content">
                    <div className="container my-3">
                        <form className="form-inline" >
                            <div className="card">
                                <img src='https://source.unsplash.com/random?wallpapers'
                                    className="my-2 img" alt="Image not found" width="200" height="200" title="Enter your number to get otp"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Getting OTP</h5>
                                    <form action="">

                                        {/* form-group for Name */}
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName" className="mx-2">Name:</label>
                                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name" />
                                        </div>
                                        {/* form-group for Name */}

                                        {/* form-group for OTP */}
                                        <div className="form-group">
                                            <label htmlFor="exampleInputOTP" className="my-3 mx-3">OTP:</label>
                                            <input type="text" className="form-control" id="exampleInputOTP" placeholder="Enter OTP" />
                                        </div>
                                        {/* form-group for OTP */}

                                         {/* <------------ Verifying OTP starting ------------>  */}
                                        <button type="submit" className="btn btn-info my-2">Verify OTP</button> 
                                         {/* <------------ Verifying OTP ending ------------>  */}

                                        {/* <------------ Resend OTP starting ------------>  */}
                                        <button type="submit" className="btn btn-danger my-2 mx-2">Resend OTP</button>  
                                        {/* <------------ Resend OTP ending ------------>  */}

                                    </form>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default HomeComponent;