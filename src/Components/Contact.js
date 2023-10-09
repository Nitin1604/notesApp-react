import NavigationComponent from "./Navigation";
import React from 'react';

const ContactComponent = () => {


    return (
        <>
            <div id="ContactComponent">
                <NavigationComponent />
                <div className="content">
                    <div className="container">
                        <form>
                            
                            {/* form-row for First Name and Last Name start here */}
                            <div className="form-row my-4">

                                {/* form-group col-6 for First Name start here */}
                                <div className="form-group col-6">
                                    <div className="row mx-2">
                                        <label htmlFor="inputFirstName">First Name</label>
                                    </div>
                                    <input type="text" className="form-control" id="inputFirstName"placeholder="Enter your first name" />
                                </div>
                                {/* form-group col-6 for First Name ends here */}

                                {/* form-group col-6 for Last Name start here */}
                                <div className="form-group col-6">
                                    <div className="row mx-2">
                                        <label htmlFor="inputLastName">Last Name</label>
                                    </div>
                                    <input type="text" className="form-control" id="inputLastName" placeholder="Enter your last name"/>
                                </div>
                                {/* form-group col-6 for Last Name ends here */}

                            </div>
                            {/* form-row for First name and Last name ends here */}

                            {/* form-group for Temporary Address and it's input field start here */}
                            <div className="form-group">
                                <div className="row mx-2">
                                    <label htmlFor="inputAddress">Temporary Address</label>
                                </div>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Enter your temporary address" />
                            </div>
                            {/* form-group for Temporary Address and it's input field ends here */}

                            {/* form-group for Permanent Address and it's input field start here */}
                            <div className="form-group">
                                <div className="row mx-2">
                                    <label htmlFor="inputAddress2">Permanent Address</label>
                                </div>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Enter your permanent address" />
                            </div>
                            {/* form-group for Permanent Address and it's input field ends here */}

                            {/* form-row including City , State , Zip and their corresponding input field */}
                            <div className="form-row">

                                {/* col-md-6 for City start here */}
                                <div className="form-group col-md-6">
                                    <div className="row mx-2">
                                        <label htmlFor="inputCity">City</label>
                                    </div>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Enter your city"/>
                                </div>
                                {/* col-md-6 for City ends here */}

                                {/* col-md-4 for State start here */}
                                <div className="form-group col-md-4">
                                    <div className="row mx-2">
                                        <label htmlFor="inputState">State</label>
                                    </div>
                                    <input type="text" className="form-control" id="inputState" placeholder="Enter your state"/>
                                </div>
                                {/* col-md-4 for State ends here */}

                                {/* col-md-2 for State start here */}
                                <div className="form-group col-md-2">
                                    <div className="row mx-2">
                                        <label htmlFor="inputZip">Zip</label>
                                    </div>
                                    <input type="text" className="form-control" id="inputZip" placeholder="Enter your zip code"/>
                                </div>
                                {/* col-md-2 for State ends here */}

                            </div>
                            {/* form-row including City , State , Zip and their corresponding input field */}

                            {/* Submit button and class is row mx-2 start here */}
                            <div className="row mx-2">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                            {/* Submit button and class is row mx-2 ends here */}
                            
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ContactComponent;