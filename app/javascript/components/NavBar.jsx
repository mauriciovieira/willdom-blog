import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import axios from 'axios'

function NavBar({isUserSignedIn, logOutPath}) {
  const [show, setShow] = useState(false);

  const logOut = () => {
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios({
      method: "DELETE",
      url: "/users/sign_out.json",
    })
    .then(() => window.location = "/")
    .catch(error => console.log("error", error))
  }

  return (
    <div>
      <div className={`collapse bg-dark ${show ? 'show' : ''}`} id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About the challenge</h4>
              <p className="text-muted">You are expected to build a small blog using Ruby on Rails (and optionally React).</p>
              { isUserSignedIn &&
                <Button variant="outline-secondary" size="sm" onClick={logOut}>
                  LogOut
                </Button>
              }
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">by Jose Vega</h4>
              <ul className="list-unstyled">
                <li><a href="https://github.com/jocvegar" className="text-white" target="_blank">
                  Github
                  <i className="ml-2 fab fa-github"></i>
                </a></li>
                <li><a href="https://linkedin.com/in/jose-carlos-vega/" className="text-white" target="_blank">
                  Linkedin
                  <i className="ml-2 fab fa-linkedin-in"></i>
                </a></li>
                <li><a href="mailto:jocvegar.com" className="text-white">
                  Email
                  <i className="ml-2 far fa-envelope"></i>
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <strong>Aficionado</strong>
            <i className="ml-2 far fa-clock"></i>
          </a>
          <button onClick={() => setShow(!show)} className={`navbar-toggler ${show ? 'collapsed' : ''}`} type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}


NavBar.propTypes = {
  isUserSignedIn: PropTypes.bool,
};

export default NavBar
