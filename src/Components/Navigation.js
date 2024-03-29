const NavigationComponent = () => {

    return (
        <div id="NavigationComponent">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbarClass">
                <div className="container-fluid">
                    <a className="navbar-brand" id="notesApp" href="/">Notes Making App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            
                            {/* Navigation for Home Components */}
                            <li className="nav-item">
                                <a className="nav-link active" id="home" aria-current="page" href="/home">Home</a>
                            </li>

                            {/* Navigation for About Components */}
                            <li className="nav-item">
                                <a className="nav-link active" id="about" aria-current="page" href="/about">About</a>
                            </li>

                            {/* Navigation for Login Components */}
                            <li className="nav-item">
                                <a className="nav-link active" id="login" aria-current="page" href="/login">Login</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationComponent;