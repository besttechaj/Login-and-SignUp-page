import React from 'react';
import { Link } from 'react-router-dom';

const home = (props) => {
  return (
    <div>
      <div>
        <h1>
          <Link to='/login'>Login</Link>
        </h1>
        {/* <br/> tag inserts a single line break */}
        <br />
        <h1>
          <Link to='/signup'>SignUp</Link>
        </h1>
      </div>
      <br />
      <br />
      <br />
      <h2>{props.name ? `Welcome - ${props.name}` : `Login Please`}</h2>
    </div>
  );
};

export default home;
