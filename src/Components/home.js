import NavigationComponent from "./Navigation";
import React from 'react';


const HomeComponent = () => {


    return (
        <>
            <div id="HomeComponent">
                <NavigationComponent />
                <div className="content">
                    <div className="container my-3">
                        <form class="form-inline">
                            <div class="form-group mx-sm-3 mb-2">
                                <label className="mx-3">Enter your OTP: </label>
                                <input type="text" class="form-control" id="inputPassword2" placeholder="Enter OTP" />
                            </div>
                            
                            <button type="submit" class="btn btn-success mb-2">Verify OTP</button>
                            <button type="submit" class="btn btn-danger mb-2 mx-2">Resend OTP</button>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default HomeComponent;