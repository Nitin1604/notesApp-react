import NavigationComponent from "./Navigation";
import React from 'react';
import lock from './lock.png';
import { Helmet } from 'react-helmet';

const Title = 'Lock Screen';
const LockManager = () => {


    return (
        <>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            <div id="LockManager">
                <NavigationComponent />
                <div className="content">
                    <div className="container my-3">
                        <form>
                            <div className="text-center mb-4">
                                <img className="mb-4 my-2" src={lock} alt="Image not found" width="72" height="72" />
                                <h1 className="h3 mb-3 font-weight-normal">Lock Screen Password</h1>
                                <p><b className="text-success">Enter your pin to get </b><b className="text-primary">access to your notes..</b></p>
                            </div>


                            <form className="form-inline col-sm-6">
                                <div className="form-group mx-sm-3 mb-2 mx-5">
                                    <label htmlFor="inputPassword" className="mx-3">Enter PIN:</label>
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Enter your PIN to unlock" />
                                    <button className="btn btn-primary my-2 mx-3" type="submit">Unlock</button>
                                </div>
                            </form>
                            <p className="mt-5 mb-3 text-primary">&copy; Lock Screen Password | New Version</p>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default LockManager;