import NavigationComponent from "./Navigation";
import React from 'react';
import { Helmet } from 'react-helmet';

const Title = 'About Us';

const AboutComponent = () => {

    return (
        <>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            <div id="AboutComponent">
                <NavigationComponent />
                <div className="content">
                    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 className="display-4 font-weight-normal text-danger">NotesApp</h1>
                            <p className="lead font-weight-normal text-white mt-2 mb-3 btn btn-info" title="NotesApp have too much features">
                                You can do anything with the NotesApp like editing , deleting the notes</p>
                            <p>

                                <a className="btn btn-danger mx-2" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" data-placement="top" title="Press to show the content of edit button">Editing</a>
                                <button className="btn btn-success mx-2" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" data-placement="top" title="Press to show the content of delete button">Deleting</button>

                                <button className="btn btn-primary mx-2" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3" data-placement="top" title="Press to show the content of add button">Adding</button>



                            </p>
                            <div className="row">
                                <div className="col">
                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                        <div className="card card-body text-danger">
                                            User can edit the notes.
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                                        <div className="card card-body text-success">
                                            User can delete the notes.
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="collapse multi-collapse" id="multiCollapseExample3">
                                        <div className="card card-body text-primary">
                                            User can add the notes.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-device box-shadow d-none d-md-block"></div>
                        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
                    </div>

                    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                        <div className="bg-secondary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Editing the notes</h2>
                                <p className="lead">You can edit the notes.</p>
                            </div>
                            <div className="bg-light box-shadow mx-auto"  ></div>
                        </div>
                        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">Deleting the notes</h2>
                                <p className="lead">You can also the notes.</p>
                            </div>
                            <div className="bg-dark box-shadow mx-auto"  ></div>
                        </div>
                    </div>

                    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">Inserting the notes</h2>
                                <p className="lead">You can insert the notes</p>
                            </div>
                            <div className="bg-dark box-shadow mx-auto"  ></div>
                        </div>
                        <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Mark the notes as read</h2>
                                <p className="lead">Notes can mark as read</p>
                            </div>
                            <div className="bg-light box-shadow mx-auto"  ></div>
                        </div>
                    </div>

                    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                        <div className="bg-success mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">Mark the notes as unread</h2>
                                <p className="lead">Notes can be mark as unread</p>
                            </div>
                            <div className="bg-white box-shadow mx-auto"  ></div>
                        </div>
                        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Why notes are marked as unread?</h2>
                                <p className="lead">To inform the user that notes are still left to read</p>
                            </div>
                            <div className="bg-white box-shadow mx-auto"  ></div>
                        </div>
                    </div>

                    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">Why notes are marked as read?</h2>
                                <p className="lead">To inform the user the notes are read</p>
                            </div>
                            <div className="bg-white box-shadow mx-auto"  ></div>
                        </div>
                        <div className="bg-danger mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Adding the notes</h2>
                                <p className="lead">Adding the notes to perform the action.</p>
                            </div>
                            <div className="bg-white box-shadow mx-auto"  ></div>
                        </div>
                    </div>

                    <footer className="container py-5">
                        <div className="row">

                            <div className="col-6 col-md">
                                <h5>Advantages Of Note Making</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-muted" href="#">Personalized</a></li>
                                    <li><a className="text-muted" href="#">Reversible</a></li>
                                    <li><a className="text-muted" href="#">Alternate</a></li>
                                    <li><a className="text-muted" href="#">Quick Learning</a></li>
                                    <li><a className="text-muted" href="#">Creating an outline</a></li>
                                    <li><a className="text-muted" href="#">Assignment notes</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <h5>Disadvantages Of Note Making</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-muted" href="#">Losing vital eye contact</a></li>
                                    <li><a className="text-muted" href="#">Losing the train of conservation</a></li>
                                    <li><a className="text-muted" href="#">Making the interviewee hesitant</a></li>
                                    <li><a className="text-muted" href="#">Causing excessive attention</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <h5>Format of note making</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-muted" href="#">Outline</a></li>
                                    <li><a className="text-muted" href="#">Split</a></li>
                                    <li><a className="text-muted" href="#">Diagram</a></li>
                                    <li><a className="text-muted" href="#">Mindmap</a></li>
                                    <li><a className="text-muted" href="#">Prompt Format</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <h5>Important regarding Note making</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-muted" href="#">Avoid writing long sentences.
                                    </a></li>
                                    <li><a className="text-muted" href="#">Topic or the message of NotesApp.</a></li>
                                    <li><a className="text-muted" href="#">You can ignore information.</a></li>
                                    <li><a className="text-muted" href="#">Be specific and clear.</a></li>
                                    <li><a className="text-muted" href="#">Use appropriate indentation.</a></li>
                                </ul>
                            </div>
                        </div>

                        <a className="btn btn-primary mx-2 my-2" title="Press to move up" href="#">Back to top</a>
                    </footer>

                </div>
            </div>

        </>

    )
}

export default AboutComponent;