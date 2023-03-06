import React from 'react';
import logo from '../images/main_logo.png';
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div style={{position: "fixed", width: "100%", zIndex: "1"}}>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand mx-2 my-2" href="/"><img src={logo} style={{borderRadius:"10px"}} width="50px" height="40px" alt="#" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.about}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.tab1}</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.tab2}</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.tab3}</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.tab4}</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.tab5}</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.tab6}</a> 
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </li> */}
                </ul>
                <div className={`form-check form-switch text-${props.btnTxtCol}`}>
                    <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.txt}</label>
                </div>
                {/* <button className="btn btn-outline-success mx-2" type="button">Sign Up</button>
                <button className="btn btn-outline-success mx-2" type="button">Sign In</button> */}
            </div>
        </div>
    </nav>
 </div>
  )
}

Navbar.propTypes = {
    about: PropTypes.string
}

Navbar.defaultProps = {
    about: "About"
}
