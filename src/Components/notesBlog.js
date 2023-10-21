import NavigationComponent from "./Navigation";
import React from 'react';
import { Helmet } from 'react-helmet';

const Title = 'Notes Blog';
const myStyle = {
    backgroundImage:
        "url('https://source.unsplash.com/random?wallpapers')" ,
    height: '387px',
    padding: '80px',
    // width: '492px',
    marginTop: -'23px',
    fontSize: '50px',
    backgroundRepeat: 'no-repeat',
};
const notesComponent = () => {

    return (
        <>
            <Helmet>
                <title>{Title}</title>
            </Helmet>


            <div id="notesComponent">
                <NavigationComponent />
                <div className="content">
                    <div className="container">
                        <div className="container">
                            <header className="blog-header py-3">
                                <div className="row flex-nowrap justify-content-between align-items-center">
                                    <div className="col-4 pt-1">
                                        <a className="text-muted" href="#">Subscribe</a>
                                    </div>
                                    <div className="col-4 text-center">
                                        <a className="blog-header-logo text-dark" href="#">Large</a>
                                    </div>
                                    <div className="col-4 pt-1">
                                        <a className="blog-header-logo text-dark" href="#">Unsubscribe</a>
                                    </div>

                                </div>
                            </header>

                            <div className="container my-4">
                                <div className="text-white rounded">
                                    <div className="px-0" style={myStyle}>
                                        <h1 className="display-4 font-italic">What are the features of NotesApp?</h1>
                                        <p className="lead my-3">It can add the notes, edit the notes , delete the notes</p>
                                        <p className="lead mb-0"><a className="text-white font-weight-bold">Continue reading...</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <main role="main" className="container">
                            <div className="row">
                                <div className="col-md-8 blog-main">
                                    <h3 className="pb-3 mb-4 font-italic border-bottom">
                                        From the NotesApp
                                    </h3>

                                    <div className="blog-post">
                                        <h2 className="blog-post-title">Sample blog post for NotesApp</h2>
                                        <p className="blog-post-meta">NotesApp created by <a href="#">Nitin</a></p>

                                        <h3 className="text-success">Add images and photos</h3>
                                        <b><p>Upload images and photos as part of your notes. Notud allows you to mark them up with text, arrows or images.</p></b>
                                        <h3 className="text-danger">Safe and secure </h3>
                                        <blockquote>
                                            <b><p>Secure and encrypted notes and client information routinely backed up. GDPR Compliant.</p></b>
                                        </blockquote>

                                        <h3 className="text-info">Remote cloud access</h3>
                                        <b><p>Securely  access your important documents and client files wherever you are.</p></b>

                                        <h2 className="text-danger">Integrated</h2>
                                        <b><p>Integrate Notud with Xero or Zapier to simplify your workflow and automate your business tasks.</p></b>

                                        <h2 className="text-success">Membership support</h2>
                                        <b><p>Ongoing support and webinars to help you find a solution when you need one.</p>
                                        </b>

                                        <h2 className="text-secondary">Multi-device</h2>
                                        <b><p>Access your notes on any device - Apple, Android or Windows - with an active internet connection. No need to download or install an app!</p></b>
                                    </div>

                                    <div className="blog-post">
                                        <h2 className="blog-post-title text-danger">Get more out of your NOTES with AI</h2>

                                        <b><p>With AI we can OCR your handwriting and provide a meaningful summary</p></b>
                                        <blockquote>
                                        <b><p>Along with the summary, we can also provide a list of action items. All at your fingertips.</p>
                                        </b>
                                        </blockquote>
                                        <b><p>The perfect easy to use addition to my Xero client database. I can make notes, draw notes and ensure everything is attached to their client file for compliance. A great addition as we continue to transition to a paperless office. So easy to setup and use. </p></b>
                                    </div>



                                    <nav className="blog-pagination">
                                        <a className="btn btn-outline-primary mx-2" href="#">Editing</a>
                                        <a className="btn btn-outline-danger" href="#">Deleting</a>
                                        <a className="btn btn-outline-info mx-2" href="#">Adding</a>
                                    </nav>

                                </div>

                                <aside className="col-md-4 blog-sidebar">
                                    <div className="p-3 mb-3 bg-light rounded">
                                        <h4 className="font-italic">About</h4>
                                        <p className="mb-0">Editing, deleting , adding the notes are the features included in notesapp.</p>
                                    </div>



                                    <div className="p-3">
                                        <h4 className="font-italic">Social Media Handle</h4>
                                        <ol className="list-unstyled">
                                            <li><a href="#">GitHub</a></li>
                                            <li><a href="#">LinkedIn</a></li>
                                            <li><a href="#">YouTube</a></li>
                                        </ol>
                                    </div>
                                </aside>

                            </div>

                        </main>

                        <footer className="blog-footer my-3">
                            <p>Explore more components of Bootstrap on this site: <a href="https://getbootstrap.com/">Bootstrap.</a></p>
                            <p>
                                <a href="#" className="btn btn-danger">Back to top</a>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>


        </>

    )
}

export default notesComponent;