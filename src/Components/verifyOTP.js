import NavigationComponent from "./Navigation";
import React from 'react';
import { useState } from "react"
import otpLogo from './otpLogo.jpg';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
// import { CSSProperties } from "react";

const Title = 'OTP Login';
const OtpComponent = () => {

    const notify = () => {

        toast.success('Verification Completed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
    }

    // A simple spinner component
const Spinner = () => (
    <div className="spinner">
      <style>
        {`
          .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #000;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
          }
  
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );

  
    // Disable the button such that it can't perform action again.
    const handleButtonClick = () => {
        setButtonDisabled(true);
    };

    // Button is disabled such that it can't perform action again 
    const [buttonDisabled, setButtonDisabled] = useState(false);

    // Checking the validation for the OTP
    const [validilityInputOTP, setvalidilityInputOTP] = useState('')

    // useState hook used for entering the OTP
    const [inputOTP, setInputOTP] = useState('')

    // useState hook used for setting the contact
    const [inputContact, setInputContact] = useState('');

    const [showSpinner, setShowpinner] = useState(true);
    const [spinnerMessage, setSpinnerMessage] = useState('loading...');


    const location = useLocation();

    // let [loading, setLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        // Simulate a network request
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Change the timeout duration as needed
      };


    // useNavigate() is the hook that can use to navigate to the another page.
    const navigate = useNavigate();

    const setInputOTPbug = (errorInputOTP) => {
        setvalidilityInputOTP(errorInputOTP)
        return false
    }

    // Verfying the OTP click function
    const handleVerifyOTPClick = async () => {
        if (validateVerifyOTPInput()) {
            try {
                const response = await verifyOTPApiCall();
                // console.log("Response: ", response);

                // If the otp is incorrect which was not matched from the server code then show this message
                if (response.signInToken == undefined) {
                    showError("Invalid OTP. Please try again.");
                }

                // If otp is correct then navigate it to the notes page and move the dashboard with signInToken
                else {
                    notify();
                    handleButtonClick();
                    handleClick();
                    // setLoading(!loading)
                    // navigate("/notes", { state: { signInToken: response.signInToken } });
                }
            } catch (error) {
                console.log("Error calling while verifying OTP: ", error);
                // Display error message on the UI
                showError("Invalid OTP. Please try again.");
            }
        }
    }

    // Showing the error message on ui if wrong otp is entered
    const [errorMessage, setErrorMessage] = useState(null);

    const showError = (message) => {
        setErrorMessage(message);
        // Using the setTimeout function to appear the error message for 5 seconds and then disappear it
        setTimeout(() => {
            setErrorMessage(null);
        }, 5000); // Clear the error message after 5 seconds
    };


    // Checking the error come in the "OTP" input field 
    const validateVerifyOTPInput = () => {

        // Checking the condition when the inputOTP was left empty.
        if (inputOTP === '') {
            setInputOTPbug("OTP is not entered");
            return false;
        }

        // Checking the condition when inputOTP is greater then 6 digits or less then 6 digits.
        if (inputOTP.length < 6 || inputOTP.length > 6) {
            setInputOTPbug("OTP should be 6 digits");
            return false;
        }

        setvalidilityInputOTP('');
        return true;
    };

    // Verifying the OTP api call
    const verifyOTPApiCall = async () => {
        const url = "http://localhost:8080/verify-otp";
        const data = {
            phoneNumber: location.state.phoneNumber,
            otp: inputOTP,
            token: location.state.otpToken
        };

        const response = await fetch(url, {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });
        return response.json();
    };



    return (
        <>

            {/* aboslute div tags starts */}
            {/* {
                showSpinner &&

                <div className="loader">
                    <ClipLoader
                        loading={loading}
                        size={15}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    <p className="loader-text">{spinnerMessage}</p>
                </div>

            } */}

            <ToastContainer
                onClose={() => {
                    const response = verifyOTPApiCall();
                    navigate("/notes", { state: { signInToken: response.signInToken } });
                }}
            />
            {/* aboslute div tags ends */}
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            {/* { */}
                {/* !showSpinner && */}
                <div id="OtpComponent" >
                    <NavigationComponent />
                    <img src={otpLogo}
                        className="my-2" alt="Image not found" width="200" height="200"></img>

                    <div className="content" >


                        {/* div tag having form class */}
                        <div className="form class">

                            {/* section having id otpLogin */}
                            <section id="otpLogin">
                                <h1 className="text-primary">Enter the OTP received</h1>

                                <div id="otpLogin-box">
                                    {/* OTP Label and it's placeholder */}
                                    <div className="form-group my-4">

                                        {/* form-group for "OTP Login" */}
                                        <div className="form-group">
                                            <b><label htmlFor="Name" className="mx-3 text-primary">OTP</label></b>
                                            <input id="name" name="name" className="col-sm-6 text-primary inputOTP "
                                                onChange={(event) => {
                                                    // console.log(event.target.value);
                                                    setInputOTP(event.target.value)
                                                }
                                                }
                                                placeholder="Enter your OTP" />
                                        </div>
                                        {/* form-group for "OTP Login" */}

                                        {/* container class for "otpLogin" button */}
                                        <div className="container" style={{ paddingLeft: '100px' }}>
                                            <button loading="true" className="btn btn-primary" id="verify" style={{ borderRadius: '16px', width: '134px', }} onClick={() => handleVerifyOTPClick()} value={inputOTP} disabled={buttonDisabled}>Verify OTP</button>
                                            <div className=" my-2 tx-red">
                                                {errorMessage && <div className="error">{errorMessage}</div>}
                                            </div>
                                        </div>
                                        {/* container class for "otpLogin" button */}

                                        {/* Error message shown when condition is not met*/}
                                        <div className="row" hidden={validilityInputOTP === ''}>
                                            <div className="col-sm-12">
                                                <div className="row my-2 tx-red">
                                                    <div className="col-sm-10 tx-center">{validilityInputOTP}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Error message shown when condition is not met*/}

                                    </div>
                                    {/* OTP Label and it's placeholder */}

                                </div>
                            </section>
                            {/* section having id otpLogin */}

                        </div>
                        {/* div tag having form class */}

                    </div>

                </div>
            {/* } */}

        </>

    )
};
export default OtpComponent;