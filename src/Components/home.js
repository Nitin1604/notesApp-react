import NavigationComponent from "./Navigation";
import React from 'react';
import otpLogo from './otpLogo.jpg';
import { Helmet } from 'react-helmet';

const Title = 'Home Page';

const HomeComponent = () => {


    return (
        <>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            <div id="HomeComponent">
                <NavigationComponent />

                <img src={otpLogo}
                    className="my-2" alt="Image not found" width="200" height="200" title="Enter your number to get otp"></img>

                <div className="content">
                    <div className="container my-3">
                        <form class="form-inline">
                            <div class="form-group mx-sm-3 mb-2">
                                <label className="mx-3">Enter your OTP: </label>
                                <input type="text" title="Enter your otp here" class="form-control" id="inputPassword2" placeholder="Enter OTP" />
                            </div>

                            <button type="submit" class="btn btn-success mb-2" title="verify the otp">Verify OTP</button>
                            <button type="submit" class="btn btn-danger mb-2 mx-2" title="Didn't get the otp click on resend otp to get your otp again">Resend OTP</button>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default HomeComponent;