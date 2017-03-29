import React from 'react';
import { Link } from 'react-router'

import './home.scss';

const Home = (props) => (
  <div className="home__container">
    <Link to='/tribute-page'>Tribute Page</Link>
    <Link to='/random-quote-machine'>Random Quote Machine</Link>
    <Link to='/local-weather'>Show the Local Weather</Link>
  </div>
);

export default Home;
