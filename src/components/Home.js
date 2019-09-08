import React from 'react';
import ViewPeeps from './ViewPeeps';
import RegisterUser from './RegisterUser';

const Home = ({items}) => (
  <div>
    <h3>Welcome to Chitter</h3>
    <ViewPeeps />
    <RegisterUser />
  </div>
);
 
export default Home;