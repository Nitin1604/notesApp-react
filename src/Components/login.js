import NavigationComponent from "./Navigation";
import { useState } from "react"
import React from 'react';
import contactLogo from './contactLogo.jpg';
import { Helmet } from 'react-helmet';

const Title = 'Login Page';
const LoginComponent = () => {

    // validilityMsgInputName : When inputName were left empty
    const [validilityMsgInputName, setvalidilityMsgInputName] = useState('')

    // validilityMsgInputEmail : When inputEmail were left empty
    const [validilityMsgInputEmail, setvalidilityMsgInputEmail] = useState('')
    
    // validilityMsgInputContact : When inputContact were left empty
    const [validilityMsgInputContact, setvalidilityMsgInputContact] = useState('')

    // loginErrorMessage : On clicking login button will show particular error when clicking on a button..
    const [loginErrorMessage, setLoginErrorMessage] = useState('')

    // useState for setting the name
    const [inputName, setInputName] = useState('')
    
    
    // function to handle the InputName
    function InputNameMsg(event) {
        setInputName(event.target.value)
    }
  
    // function to handle setInputNameError
    const setInputNameError = (errorInputName) => {
        setvalidilityMsgInputName(errorInputName)
        return false
    }
   
    // useState for setting the email
    const [inputEmail, setInputEmail] = useState('')
    
    // function to handle the InputEmail
    function InputEmailMsg(event) {
        setInputEmail(event.target.value)
    }
    
    // function to handle setInputEmailError
    const setInputEmailError = (errorInputEmail) => {
        setvalidilityMsgInputEmail(errorInputEmail)
        return false
    }
    
    // useState for setting the contact
    const [inputContact, setInputContact] = useState('')
    
    // function to handle the InputContact
    function InputContactMsg(event) {
        setInputContact(event.target.value)
    }
   
    // function to handle setInputContactError
    const setInputContactError = (errorInputContact) => {
        setvalidilityMsgInputContact(errorInputContact)
        return false
    }

    // function to handle validation
    const validationFunction = (event) => {
        event.preventDefault()

        // when inputName were left blank 
        if (inputName === '') {
            return setInputNameError("Name can't be left blank!!")
        }
        else {
            setvalidilityMsgInputName('')
        }

         // when inputEmail were left blank 
         if (inputEmail === '') {
            return setInputEmailError("Email can't be left blank!!")
        }
        else {
            setvalidilityMsgInputEmail('')
        }
      
         // when inputContact were left blank 
         if (inputContact === '') {
            return setInputContactError("You forgot to enter your contact number!!")
        }
        else {
            setvalidilityMsgInputContact('')
        }
      
    }
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

                                    {/* form-group for "Name" */}
                                    <div className="form-group">
                                        <b><label htmlFor="text" className="text-success">Name: </label></b>
                                        <input type="text" name="text" id="text" placeholder="Enter your name" className="text-primary inputName" value={inputName} onChange={InputNameMsg} />

                                        {/* Validation Block "Input Name" will start here */}
                                        <div className="row" hidden={validilityMsgInputName === ''}>
                                            <div className="col-sm-12">
                                                <div className="row my-2 tx-red">
                                                    <div className="col-sm-10 tx-center">{validilityMsgInputName}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Validation Block "Input Name" will ends here */}

                                    </div>
                                    {/* form-group for "Name" */}

                                    {/* form-group for "Email"  */}
                                    <div className="form-group">
                                        <b><label htmlFor="text" className="text-success">Email: </label></b>
                                        <input type="text" name="text" id="text" placeholder="Enter your email" className="text-primary inputEmail" value={inputEmail} onChange={InputEmailMsg}/>

                                          {/* Validation Block "Input Email" will start here */}
                                          <div className="row" hidden={validilityMsgInputEmail === ''}>
                                            <div className="col-sm-12">
                                                <div className="row my-2 tx-red">
                                                    <div className="col-sm-10 tx-center">{validilityMsgInputEmail}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Validation Block "Input Email" will ends here */}
                                    </div>
                                    {/* form-group for "Email"  */}

                                    {/* form-group for "Phone Number" */}
                                    <div className="form-group">
                                        <b><label htmlFor="text" className="text-success">Phone Number: </label></b>
                                        <input type="text" name="text" id="text" placeholder="Enter your phone number" className="text-primary inputPhone"value={inputContact} onChange={InputContactMsg} />

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
                                    <div className="container">
                                        <button className="btn btn-success" id="loginID" style={{ borderRadius: '16px', width: '416px', }}>Login</button>
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

    )
}

export default LoginComponent;