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
      </form>
    </div>
  );
}

export default SignUpLogIn;
