import React from 'react';

function SignUpLogIn() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="button">Sign up</button>
          <button type="button">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpLogIn;
