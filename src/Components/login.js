import NavigationComponent from "./Navigation";
import { useState } from "react"
import React from 'react';
import contactLogo from './contactLogo.jpg';
import { Helmet } from 'react-helmet';

const Title = 'Login Page';
const LoginComponent = () => {
   // validilityMsgInputContact : When inputContact were left empty
   const [validilityMsgInputContact, setvalidilityMsgInputContact] = useState('')

   // loginErrorMessage : On clicking login button will show particular error when clicking on a button..
   const [loginErrorMessage, setLoginErrorMessage] = useState('')

   // useState for setting the contact , whenever user left the input field as empty
   const [inputContact, setInputContact] = useState('')

   // function to handle the InputContact
   function InputContactMsg(event) {
       setInputContact(event.target.value)
   }

   // function to handle setInputContactError when field is empty
   const setInputContactError = (errorInputContact) => {
       setvalidilityMsgInputContact(errorInputContact)
       return false
   }

    // function to handle validation
    const validationFunction = (event) => {
        event.preventDefault();

        // when inputContact were left blank
        if (inputContact === '') {
            return setInputContactError("You forgot to enter your contact number!!");
        }

        // when inputContact has digits less than 10 , show this error message
        if (inputContact.length < 10) {
            return setInputContactError("Contact number must be at least 10 digits long.");
        }

        // When both conditions are satisfied, clearing the error message
        setvalidilityMsgInputContact('');

    };

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
                        <h1 className="text-success">Login with your number</h1>
                        <div id="contact-box">

                            <form action="" onSubmit={validationFunction}>


                                {/* form-group for "Phone Number" */}
                                <div className="form-group">
                                    <b><label htmlFor="Name" className="mx-3 text-success">Contact</label></b>
                                    <input type="text" id="name" name="name" className="col-sm-6 text-primary inputPhone " placeholder="Contact no." value={inputContact} onChange={InputContactMsg} />
                                    {/* <div>
                                        {isInvalidContactNumber && <p>Error: Contact number must be 10 digits long.</p>}
                                    </div> */}

                                    {/* Validation Block "Input Contact" will start here */}
                                    <div className="row" hidden={validilityMsgInputContact === ''}>
                                        <div className="col-sm-12">
                                            <div className="row my-2 tx-red">
                                                <div className="col-sm-10 tx-center">{validilityMsgInputContact}</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Validation Block "Input Contact" will ends here */}

                                </div>
                                {/* form-group for "Phone Number" */}

                                {/* container class for "Login" button */}
                                <div className="container" style={{ paddingLeft: '100px' }}>
                                    <button className="btn btn-success" id="loginID" style={{ borderRadius: '16px', width: '134px', }}>Send OTP</button>
                                </div>
                                {/* container class for "Login" button */}

                                {/* this message shown when the particular fields is left blank on clicking login button*/}
                                <p style={{ color: "red" }}>{loginErrorMessage}</p>
                                {/* this message shown when the particular fields is left blank on clicking login button*/}

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

    );
};

export default LoginComponent;