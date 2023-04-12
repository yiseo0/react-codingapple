import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
   return (
      <div>
         <h4>회사정보</h4>
         <Link to="/about/member">member</Link>
         <br />
         <Link to="/about/lacation">lacation</Link>
         <hr />
         <Outlet></Outlet>
   
      </div>
   );
};

export default About;