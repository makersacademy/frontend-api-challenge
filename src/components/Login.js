import React from 'react';
import UserLogin from './UserLogin';

const Login = () => (
  <div>
    <h3>Login</h3>
    <p>No Account? Register <a href="/signup">here</a></p>
    <UserLogin />
  </div>
);

export default Login;
