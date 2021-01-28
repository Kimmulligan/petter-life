import React from 'react';
import './index.css';

function Portal() {
  return (
    <div className="PortalSection">
      <div className="LoginContainer">
        <div className="LoginTitle">Login</div>
        <div className="LoginCredentials">
          <div className="LoginUsername">
            <label for="username">username</label>
            <input className="LoginUsernameInputField" name="username" type="input"></input>
          </div>
          <div className="LoginPassword">
            <label for="password">password</label>
            <input className="LoginPasswordInputField" name="password" type="input"></input>
          </div>
          <div className="SignupLink" href="/signup">Signup Instead</div>
        </div>
      </div>
    </div>
  );
}

export default Portal;