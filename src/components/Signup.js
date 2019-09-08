import React from 'react';

const Signup = ({}) => (
  <div>
    <h1>Sign Up</h1>

  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate" />
          <label for="first_name">Username</label>
        </div>
     </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="password" type="password" className="validate" />
          <label for="password">Password</label>
        </div>
      </div>
  
    </form>
  </div>
  </div> 
  
);
 
 
export default Signup;